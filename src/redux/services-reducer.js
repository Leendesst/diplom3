
const SERCICES_LOADED_APPEND = 'SERVICES-LOADED-APPEND';

const initialState = {
    data: {},
};

const servicesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SERCICES_LOADED_APPEND:
            return {
                ...state,
                data: {...state.data, ...action.value},
            };
        
        default:
            return state;
    }
};

export const servicesLoadedAppend = (value) => ({
    type: SERCICES_LOADED_APPEND,
    value: value,
});

export default servicesReducer;