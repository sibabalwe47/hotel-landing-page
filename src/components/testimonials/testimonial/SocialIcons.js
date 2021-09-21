import react from "react";

const SocialIcon = ({ link }) => {
  if (link.includes("facebook")) {
    return (
      <li>
        <a href={link}>
          <i className="fab fa-facebook-f"></i>
        </a>
      </li>
    );
  }

  if (link.includes("instagram")) {
    return (
      <li>
        <a href={link}>
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    );
  }
  if (link.includes("twitter")) {
    return (
      <li>
        <a href={link}>
          <i className="fab fa-twitter"></i>
        </a>
      </li>
    );
  }
};

export default SocialIcon;
