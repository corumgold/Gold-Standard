import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="links">
        <a href="mailto:goldstandard.dog@gmail.com">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/email.png"}
            alt="email"
          />
        </a>
        <a href="sms:14235092278">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/textmessage.png"}
            alt="text"
          />
        </a>
        <a href="tel:14235092278">
          <img
            className="social-icon"
            src={process.env.PUBLIC_URL + "/images/call.png"}
            alt="call"
          />
        </a>
      </div>
      <p>Created with love by Cory Gold | © twentytwentythree</p>
    </div>
  );
};

export default Footer;
