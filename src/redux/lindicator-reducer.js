const LOADING_SET_FLAG = 'LOADING-SET-FLAG';
const LOADING_CLR_FLAG = 'LOADING-CLR-FLAG';

// Флаги индикатора
export const LOAD_WORKS_NAME = 'LOAD_WORKS';
export const LOAD_SERVICES_NAME = 'LOAD_SERVICES';
export const LOAD_SUBSCRIBE_NAME = 'LOAD_SUBSCRIBE';

const initialState = {
    falgs: {
        [LOAD_WORKS_NAME]: false,
        [LOAD_SERVICES_NAME]: false,
        [LOAD_SUBSCRIBE_NAME]: false,
    }
};

const loadingIndicatorsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case LOADING_SET_FLAG:
            return {
                ...state,
                falgs: {...state.falgs, [action.name]: true},
            };
        case LOADING_CLR_FLAG:
            return {
                ...state,
                falgs: {...state.falgs, [action.name]: false},
            };
        
        default:
            return state;
    }
};

export default loadingIndicatorsReducer;

export const loadingSet = (name) => ({
    type: LOADING_SET_FLAG,
    name: name,
});

export const loadingClear = (name) => ({
    type: LOADING_CLR_FLAG,
    name: name,
});
