import React from "react";
import Reviews from "./Reviews";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Form from "./Form";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="intro">
          <h1>Gold Standard</h1>
          <h2 className="big-header">Dog Training</h2>
          <p>
            Bringing <span>joy</span> and <span>peace</span>
          </p>
          <p>into the lives of</p>
          <p>
            <span>you</span> and your <span>dog</span>.
          </p>
        </div>
      </div>
      <AboutMe />
      <Reviews />
      <Form />
      <Footer />
    </>
  );
};

export default Hero;
