import * as SEARCH_ACTIONS from '../actions/search/types';

const initialState = {
    loading: false,
    search: {
        location: "",
        to: "",
        from: "",
        guests: 0
    },
    results: []
};


export const searchReducer  = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {

        case SEARCH_ACTIONS.SET_SEARCH_VALUE:
            // Update object properties
            state.search[payload.key] = payload.value;
            return {
                ...state,
                search: state.search
            }

        default: 
            return state;
    }
}

