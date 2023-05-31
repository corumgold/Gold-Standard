import React from "react";
import Review from "./Review";
import reviews from "../reviews";

const Reviews = () => {
  return (
    <div id="projects" className="home-projects home-container">
      <h3>Testimonials</h3>
      <div className="projects-carousel">
        {reviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
