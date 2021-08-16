import react, { useState, Fragment } from 'react'
import Dropdown from '../../../dropdown/Dropdown';
import { useDispatch } from 'react-redux'
import * as SEARCH_ACTIONS from '../../../../store/actions/search/actions'

const Locations = () => {
    // Use dispatch 
    const dispatch = useDispatch();
    // Title
    const title = "City"
    // Component data
    const data = ['Johannesburg', 'Cape Town', 'Durban', 'Mombasa', 'Nairobi'];
    // Pass data from child component to store
    const setValue = (value) => {
        // Store location search query
        const query = {
            key: "location",
            value: value
        }
        // Dispatch action
        dispatch(SEARCH_ACTIONS.setSearchValue(query));
    }
    return (
        <Dropdown headerTitle={title} data={data} setValue={setValue}  />
    )
}

export default Locations;