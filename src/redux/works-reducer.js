
const WORKS_LOADED_APPEND = 'WORKS-LOADED-APPEND';

const initialState = {
    data: {},
};

const worksReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case WORKS_LOADED_APPEND:
            return {
                ...state,
                data: {...state.data, ...action.value},
            };
        
        default:
            return state;
    }
};

export default worksReducer;

export const worksLoadedAppend = (value) => ({
    type: WORKS_LOADED_APPEND,
    value: value,
});
