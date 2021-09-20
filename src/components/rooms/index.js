import react from "react";
import Room from "./room/room";
import rooms from "../../data/rooms.json";

const Rooms = () => {
  return (
    <div className="row">
      {rooms && rooms.map((room) => <Room data={room} />)}
    </div>
  );
};

export default Rooms;
