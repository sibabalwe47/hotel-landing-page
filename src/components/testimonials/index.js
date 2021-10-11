import react from "react";
import Testimonial from "./testimonial/testimonial";
import reviews from "../../data/reviews.json";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <OwlCarousel dots items={2} className="owl-theme" loop margin={30}>
          {reviews && reviews.map((review) => <Testimonial data={review} />)}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
