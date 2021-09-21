import react from "react";
import Button from "../../button/button";

const Room = ({ data }) => {
  const { image, title, ammenities, price, link } = data;

  return (
    <div className="col-4">
      <div className="room">
        <div
          className="room-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="room-content">
          <h3>{title && title}</h3>
          <div className="room-perks">
            <span className="perk">
              <i class="fas fa-map-marker-alt"></i>{" "}
              {ammenities && ammenities.location}
            </span>
            <span className="perk">
              <i class="far fa-user"></i> {ammenities && ammenities.guests} x
              Guests
            </span>
            <span className="perk">
              <i class="fas fa-home"></i> {ammenities && ammenities.num_rooms} x
              Rooms
            </span>
          </div>
          <div className="room-price">
            <span className="price">N {price}</span>
            <Button title="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
