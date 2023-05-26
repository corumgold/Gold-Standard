import React from "react";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Footer from "./Footer";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="intro">
          <h1>Gold Standard</h1>
          <h2 className="big-header">Dog Training</h2>
          <p>
            Where a <span>dog's</span> world{" "}
            and a <span>human's</span> world{" "}
            become <span>one</span>.
          </p>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <Footer />
    </>
  );
};

export default Hero;
