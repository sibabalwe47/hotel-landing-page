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
              <i className="fa fa-location"></i> Location goes here
            </span>
            <span className="perk">
              <i className="fa fa-location"></i> Location goes here
            </span>
            <span className="perk">
              <i className="fa fa-location"></i> Location goes here
            </span>
          </div>
          <div className="room-price">
            <span className="price">N1000</span>
            <Button title="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
