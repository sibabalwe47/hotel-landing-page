import react from "react";
import Testimonial from "./testimonial/testimonial";
import reviews from "../../data/reviews.json";

const Testimonials = () => {
  return (
    <div className="wrapper">
      <div className="row">
        {reviews && reviews.map((review) => <Testimonial data={review} />)}
      </div>
    </div>
  );
};

export default Testimonials;
