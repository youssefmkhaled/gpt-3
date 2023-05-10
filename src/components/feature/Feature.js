import React from "react";
import "./feature.css";

const Feature = ({ text, title }) => {
  return (
    <div className="feature">
      <div className="head">
        <span></span>
        <h2>{title}</h2>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
