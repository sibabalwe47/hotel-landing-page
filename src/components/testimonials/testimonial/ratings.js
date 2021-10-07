import react, { Fragment } from "react";

const Ratings = ({ rating }) => {
  const ratings = [];

  if (rating && rating !== undefined) {
    for (var i = 0; i < rating; i++) {
      ratings.push(i);
    }
  }

  return (
    <Fragment>
      {ratings &&
        ratings.map((rating) => {
          return (
            <span className="rate">
              <i className="fas fa-star"></i>
            </span>
          );
        })}
    </Fragment>
  );
};

export default Ratings;
