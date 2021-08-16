import react from 'react'
import Guests from './inputs/Guests';
import Locations from './inputs/Locations'
import Dates from './inputs/Dates';
import Button from '../../button/button'

/*
 * Application state, actions and reducers
 */

import { useDispatch, useSelector } from 'react-redux'
import * as SEARCH_ACTIONS from '../../../store/actions/search/actions'

const SearchRooms = () => {
    // Use dispatch 
    const dispatch = useDispatch();
    // Get state slice
    const { search } = useSelector(state => state.searchReducer);
    // Send search data to api
    const onSearchHandler = () => dispatch(SEARCH_ACTIONS.searchAvailableLocations(search));
    // Pass data from child component to store
    const onChangeDateValues = (values) => {
        console.log(values)
        // Get data to save query
        const {type, date} = values;
        // Store date search query
        const query = {
            key: type,
            value: date
        }
        // Dispatch action
        dispatch(SEARCH_ACTIONS.setSearchValue(query));
    }

    return (
        <div className="search-rooms">
            <div className="row">


                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md-3">
                            <span>Where</span>
                            <Locations />
                        </div>
                        <div className="col-md-3">
                            <span>Check in</span>
                            <Dates action={onChangeDateValues} type="from" />
                        </div>
                        <div className="col-md-3">
                            <span>Check in</span>
                            <Dates action={onChangeDateValues} type="to" />
                        </div>
                        <div className="col-md-3">
                            <span>Guests</span>
                            <Guests />
                        </div>
                    </div>
                </div>
                <div className="col-md-1">
                    <Button title="Search" action={onSearchHandler}/>
                </div>
            </div>
        </div>
    )
}

export default SearchRooms;