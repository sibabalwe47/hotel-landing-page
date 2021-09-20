import react from "react";
import image from "../../assets/newsletter.jpg";

const Newsletter = () => {
  return (
    <div
      className="newsletter"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="mask">
        <div className="container">
          <div className="form-wrapper">
            <div className="row">
              <div className="col-md-5 aside cta">
                <p>Subscribe to our</p>
                <h3>Newsletter</h3>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-6 aside form">
                <input type="text" placeholder="Your email address" />
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
