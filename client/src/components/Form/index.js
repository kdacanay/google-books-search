import React from "react";
import "./style.css";

//...props means to spread over 
export const Input = (props) => {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
};

// Destructuring the type, className, children and onClick props, applying them to the button element
export const SearchButton = ({ type = "default", className, children, onClick }) => {
  return (
    <button id='search-btn-id' onClick={onClick} className={["search btn btn-lg", `btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
};