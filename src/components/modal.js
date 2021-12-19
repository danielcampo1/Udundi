import React from "react";
import { Button, FontIcon } from "react-md";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <Button onClick={props.onClose} theme="error" themeType="disabled">
            <FontIcon>close</FontIcon>
          </Button>
        </div>
        <div className="modal-title">
          <h2> Explore </h2>
        </div>
        <div className="modal-body">
          <p>let the games begin </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
