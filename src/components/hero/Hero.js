import react, { Fragment } from "react";
import Overlay from "../overlay/Overlay";
import SearchRooms from "../forms/rooms/SearchRooms";

const HeroContent = (heroTitle, title) => (
  <Fragment>
    <div className="hero-content">
      <h1>
        Hotel that Defines a <br /> New Dimension of Luxury.
      </h1>
      <p>Up To 60% Off Book Your Dream Rooms Online Now!</p>
    </div>
    <SearchRooms />
  </Fragment>
);

const Hero = ({ heroTitle, title }) => {
  return (
    <header
      className="hero"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=450)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Overlay
              children={HeroContent(heroTitle, title)}
              position="center"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
