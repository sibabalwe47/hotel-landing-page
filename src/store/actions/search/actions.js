import * as SEARCH_ACTIONS from './types'

export const setSearchValue = (values) => dispatch => {
    dispatch({
        type: SEARCH_ACTIONS.SET_SEARCH_VALUE,
        payload: values
    })
} 

export const searchAvailableLocations = (values) => dispatch => console.log(values)