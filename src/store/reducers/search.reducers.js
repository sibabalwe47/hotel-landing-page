import * as SEARCH_ACTIONS from '../actions/search/types';


export const searchReducer  = (state = {
    loading: false,
    search: {},
    results: []
}, action) => {
    const { type, payload } = action;
    switch(type) {

        case SEARCH_ACTIONS.SET_SEARCH_VALUE:

            const query = {}
            query[payload.key] = payload.value;

            return {
                ...state,
                search: {...state.search, query}
            }

        default: 
            return state;
    }
}

