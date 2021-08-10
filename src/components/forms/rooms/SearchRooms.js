import react from 'react'
import Guests from './inputs/Guests';
import Locations from './inputs/Locations'
import Dates from './inputs/Dates';

const SearchRooms = () => {
    return (
        <div className="search-rooms">
            <div className="row">
                <div className="col-md-3">
                    <span>Where</span>
                    <Locations />
                </div>
                <div className="col-md-3">
                    <span>Check in</span>
                    <Dates />
                </div>
                <div className="col-md-3">
                    Check out
                </div>
                <div className="col-md-3">
                    Guests
                    <Guests />
                </div>
            </div>
        </div>
    )
}

export default SearchRooms;