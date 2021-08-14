import react from 'react'
import Guests from './inputs/Guests';
import Locations from './inputs/Locations'
import Dates from './inputs/Dates';
import Button from '../../button/button'

const SearchRooms = () => {



    const onSearchHandler = () => console.log('Searching....');

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
                            <Dates />
                        </div>
                        <div className="col-md-3">
                            <span>Check in</span>
                            <Dates />
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


                {/* <div className="col-md-2">
                    <span>Where</span>
                    <Locations />
                </div>
                <div className="col-md-2">
                    <div>
                        <span>Check in</span>
                        <Dates />
                    </div>

                </div>
                <div className="col-md-2">
                     <div>
                        <span>Check in</span>
                        <Dates />
                    </div>
                </div>
                <div className="col-md-3">
                    Guests
                    <Guests />
                </div> */}
            </div>
        </div>
    )
}

export default SearchRooms;