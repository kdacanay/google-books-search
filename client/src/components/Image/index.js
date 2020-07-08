import React from "react";
import "./style.css";

const Image = ({ src }) => {
  return (
    <div
      className="image"
      role="img"
      aria-label="Book Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
};

export default Image;