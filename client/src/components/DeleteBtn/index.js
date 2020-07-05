import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span id='delete-btn-id' className="delete-btn" {...props} role="button" tabIndex="0">
      Delete ✗
    </span>
  );
}

export default DeleteBtn;
