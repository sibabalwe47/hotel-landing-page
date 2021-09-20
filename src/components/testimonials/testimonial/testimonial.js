import react from "react";

const Testimonial = ({ data }) => {
  const { image, name, job, rating, review, social_links } = data;
  return (
    <div className="col-md-6">
      <div className="testimonial">
        <div className="client">
          <div className="image">
            <img className="img-fluid" src={`${image}`} />
          </div>
          <h4>{name && name}</h4>
          <span>{job && job}</span>
        </div>
        <div className="ratings"></div>
        <div className="testimony">{review && review}</div>
      </div>
    </div>
  );
};

export default Testimonial;
