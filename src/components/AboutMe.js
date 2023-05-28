import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h3>About Us</h3>
      <>
        <div className="profile-picture">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-photo.png"}
            alt="profile"
          />
          <h4>Marguerite Gold</h4>
          <h5>Co-Founder & Head Trainer</h5>
        </div>
        <div id="about-me-block">
          <div className="about-me-entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            inventore et odit nam, eaque, ipsa, expedita modi sint fugit
            dolores? Quam nam laudantium expedita delectus dolorum laborum
            repellendus eius!
          </div>
          <div className="about-me-entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            inventore et odit nam, eaque, ipsa, expedita modi sint fugit
            dolores? Quam nam laudantium expedita delectus dolorum laborum
            repellendus eius!
          </div>
          <div className="about-me-entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            inventore et odit nam, eaque, ipsa, expedita modi sint fugit
            dolores? Quam nam laudantium expedita delectus dolorum laborum
            repellendus eius!
          </div>
        </div>
        <div className="profile-picture">
          <img
            src={process.env.PUBLIC_URL + "/images/profile-photo.png"}
            alt="profile"
          />
          <h4>Cory Gold</h4>
          <h5>Co-Founder</h5>
        </div>
        <div id="about-me-block">
          <div className="about-me-entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            inventore et odit nam, eaque, ipsa, expedita modi sint fugit
            dolores? Quam nam laudantium expedita delectus dolorum laborum
            repellendus eius!
          </div>
          <div className="about-me-entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            inventore et odit nam, eaque, ipsa, expedita modi sint fugit
            dolores? Quam nam laudantium expedita delectus dolorum laborum
            repellendus eius!
          </div>
          <div className="about-me-entry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ut
            inventore et odit nam, eaque, ipsa, expedita modi sint fugit
            dolores? Quam nam laudantium expedita delectus dolorum laborum
            repellendus eius!
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutMe;
