import react from "react";
import { Button } from "react-md";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="model-content">
        <div className="header">
          <Button>here</Button>
        </div>
        <div className="model-title">
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
