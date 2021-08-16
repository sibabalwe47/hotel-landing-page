import react from 'react'
import Button from '../../button/button'

const Room = () => {
    return (
        <div className="col-4">
           <div className="room">
               <div className="room-image">

               </div>
               <div className="room-content">
                   <h3>Gold Scar Place</h3>
                    <div className="room-perks">
                        <span className="perk"><i className="fa fa-location"></i> Location goes here</span>
                        <span className="perk"><i className="fa fa-location"></i> Location goes here</span>
                        <span className="perk"><i className="fa fa-location"></i> Location goes here</span>
                    </div>
                    <div className="room-price">
                        <span className="price">N1000</span>
                        <Button title="Book Now" />
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Room;