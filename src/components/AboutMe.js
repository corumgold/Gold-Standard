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
            Marguerite is an AKC Certified Dog Trainer, AKC Fit Dog Instructor,
            and an IACP Associate Member with 7+ years of professional
            experience. Her experience ranges from obedience training, behavior
            modification, and reactivity/aggression rehabilitation. She loves
            making a difference in people's lives by educating them about their
            dogs and their dogs about them!
          </div>
          <div className="about-me-entry">
            Marguerite is committed to finding solutions that fit each owner and
            dog's needs on an individual basis as no dog or human is alike. By
            attending several seminars a year and staying on top of industry
            standards, Marguerite is committed to continuing her education and
            professional development as a dog trainer and behaviorist.
          </div>
          <div className="about-me-entry">
            When not spending time with clients and helping them enjoy easier
            lives with their pets, Marguerite spends time with her own two dogs,
            Bella and Meera, and her husband and co-founder of Gold Standard Dog
            Training, Cory. She loves going on long evening walks with the whole
            family to end her day (with perfect off-leash heals, of course!) and
            can't wait to bring that peace and confidence into the lives of her
            clients.
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
            to be trained. Because the trainer provided little to no follow-up
            time, Bella soon reverted back to her pre-training self. How
            Frustrating!
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
