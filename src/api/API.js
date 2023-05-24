import axios from "axios";
import store from "../redux/redux-store";

import {loadingSet, loadingClear, LOAD_WORKS_NAME, LOAD_SERVICES_NAME, LOAD_SUBSCRIBE_NAME} from "../redux/lindicator-reducer"

const dispatch = store.dispatch;

axios.interceptors.request.use(config => {
    config.headers['Accept'] = 'application/json';
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.baseURL = '/api/';
    return config;
});

const withLogger = (target) => async (...args) => {
    console.log('API call ', target)
    return await target.apply(this, args);
}

const withIndicator = (target, name) => async (...args) => {
    try {
        await dispatch(loadingSet(name));
        return await target.apply(this, args);
    } finally {
        await dispatch(loadingClear(name));
    }
};

const withErrProcessing = (target, handler, name) => {
    const newTarget = async (...args) => {
        try {
            return await target.call(this, ...args);
        } catch (err) {
            return await handler.call(this, err, async () => await newTarget.bind(...args));
        }
    }
    return newTarget;
};

class APIError extends Error {
    constructor(code, params, source) {
        super("APIError");
        this.code = code;
        this.params = params;
        this.source = source;
    }
}

const errHandler = async (err, repeater) => {
    throw new APIError(0, {}, err);
}

const wraps = (target, name) => {
    return withLogger(withIndicator(withErrProcessing(target, errHandler, name), name));
};

/**
 * API
 */
const InternalAPI = {
    /**
     * Загрузка ленты новостей
     * @param {*} from ID новости, с соторой они будут выводится
     */
    loadNews: async ({from}={}) => {
        const result = await axios.get('/works', !!from ? {data: {from: from}} : {data: {}});
        return result.data;
    },

    /**
     * Загрузка списка услуг
     * @param {*} from ID услуги, с соторой они будут выводится
     */
    loadServices: async ({from}={}) => {
        const result = await axios.get('/services', !!from ? {data: {from: from}} : {data: {}});
        return result.data;
    },

    /**
     * Записаться на ремонт
     * @param {*} name Имя
     * @param {*} email Почта
     * @param {*} phone Номер телефона
     * @param {*} auto_mark Марка автомобиля
     * @param {*} auto_vin VIN автомобиля
     * @param {*} auto_number гос.номер автомобиля
     * @param {*} works описание работ
     */
    subscribe: async ({name, phone, auto_mark, auto_vin, auto_number, works}) => {
        const result = await axios.post('/subscribe', {name: name, phone: phone, auto_mark: auto_mark, auto_vin: auto_vin, auto_number: auto_number, works: works});
        return result.data;
    },
}

/**
 * Обернутый API для удобного использования в приложении
 */
const API = {
    loadNews: wraps(InternalAPI.loadNews, LOAD_WORKS_NAME),
    loadServices: wraps(InternalAPI.loadServices, LOAD_SERVICES_NAME),
    subscribe: wraps(InternalAPI.subscribe, LOAD_SUBSCRIBE_NAME),
};

export default API;
