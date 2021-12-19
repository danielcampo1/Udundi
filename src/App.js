import "./App.css";
import React, { Component } from "react";
import { Button } from "@react-md/button";
import { TextIconSpacing, FontIcon } from "@react-md/icon";
import { ChatSVGIcon } from "@react-md/material-icons";
import Modal from "./components/modal";
import { Collapse } from "@react-md/transition";

class App extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick = () => {
    this.setState({ show: true });
  };

  onClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="txt">
            <h1> Explore </h1>
            <div className="btn">
              <Button
                id="combined-button-2"
                theme="clear"
                themeType="contained"
                onClick={this.handleClick}
              >
                <FontIcon>close </FontIcon>
                Read More
              </Button>
              <Modal onClose={this.onClose} show={this.state.show} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
