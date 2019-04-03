import React from "react";
import "./ProfileCard.css";

const profileCard = props => {
  return (
    <div className="card">
      <div className="card-image" />
      <div className="card-content">
        <h3>E-Books</h3>
        <p>Read your favourite from anywhere!</p>
      </div>
      <div className="social-links">
        <p>❤</p>
        <p>👍</p>
        <p>Share</p>
      </div>
      <div className="card-reveal">
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          doloribus!
        </p>
      </div>
    </div>
  );
};

export default profileCard;
