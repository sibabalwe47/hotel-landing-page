import react, { Fragment } from "react";
import Button from "../../button/button";

const About = () => {
  return (
    <Fragment>
      <div className="about wow animate__animated animate__fadeIn animate__slow">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button title="Learn More" />
      </div>
    </Fragment>
  );
};

export default About;
