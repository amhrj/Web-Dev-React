import React from "react";
import googlelogo from "../img/goog-logo.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          quidem vitae ut blanditiis quo ducimus ad unde doloremque odio,
          delectus repellendus expedita exercitationem. Dicta, temporibus
          maiores ullam minima esse quis.
        </p>
        <div className="email-contaner">
          <div>
            <img src={googlelogo} />
          </div>
          <div className="email">
            <p>amrit.mhrj@gmail.com</p>
          </div>
        </div>
        <div className="social-links">
          <div>
            <img src={googlelogo} />
          </div>
          <div>
            <img src={googlelogo} />
          </div>
          <div>
            <img src={googlelogo} />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>&copy; 2024 Amrit Maharjan</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
