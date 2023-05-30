import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="about-me">
      <h3>About Us</h3>
      <>
        <div className="profile-picture">
          <img
            src={process.env.PUBLIC_URL + "/images/m-profile-photo.png"}
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
            Cory has had the pleasure of being around dogs since the day he was
            born. He learned the value of high quality dog training (and high
            quality follow-ups!) when he sent his German Shepherd, Bella, away
            to be trained. Because the trainer provided little to up follow-up
            time, Bella soon reverted back to her pre-training self. How Frustrating!
          </div>
          <div className="about-me-entry">
            After Cory met Marguerite, she soon saw to it that Bella was
            properly trained. They worked together and soon Bella was walking
            off leash, placing on command, and just overall a happier dog.
          </div>
          <div className="about-me-entry">
            Today, Bella is doing great (along with her sister, Meera!) and Cory
            and Marguerite have pledged to help as many dogs as they can open up
            a clear line of communication with their humans so they can live
            happily together.
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutMe;
