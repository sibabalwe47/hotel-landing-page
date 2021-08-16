import react, { useState } from 'react'
import Dropdown from '../../../dropdown/Dropdown';
import { useDispatch } from 'react-redux'
import * as SEARCH_ACTIONS from '../../../../store/actions/search/actions'

const Guests = () => {
    // Use dispatch 
    const dispatch = useDispatch();
    // Title
    const title = "Number of Guests"
    // Component data
    const data = [2,4,6,8,10];
    // Pass data from child component to store
    const setValue = (value) => {
        // Store location search query
        const query = {
            key: "guests",
            value: value
        }
        // Dispatch action
        dispatch(SEARCH_ACTIONS.setSearchValue(query));
    }
    
    return (
        <Dropdown headerTitle={title} data={data} setValue={setValue}  />
    )
}

export default Guests;