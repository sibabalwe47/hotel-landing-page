import react from "react";
import Ratings from "./ratings";
import SocialIcon from "./SocialIcons";

const Testimonial = ({ data }) => {
  const { image, name, job, rating, review, social_links } = data;

  return (
    <div className="testimonial">
      <div className="client">
        <div className="image">
          <img className="img-fluid" src={`${image}`} alt={`${name} ${job}`} />
        </div>
        <h4>{name && name}</h4>
        <span>{job && job}</span>
      </div>
      <div className="ratings">{<Ratings rating={rating} />}</div>
      <div className="testimony">
        <p>{review && review}</p>
      </div>
      <div className="social-links">
        <ul>
          {social_links &&
            social_links.map((link) => <SocialIcon link={link} />)}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
