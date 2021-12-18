import "./App.css";
import React, { Component } from "react";
import { Button } from "@react-md/button";
import { TextIconSpacing, FontIcon } from "@react-md/icon";
import {
  ChatSVGIcon,
  DeleteSVGIcon,
  DoneSVGIcon,
  SaveSVGIcon,
} from "@react-md/material-icons";
class App extends Component {
  render() {
    return (
      <div className="app">
        <img
          src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdGlufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="pictures"
        />

        <div className="text">
          <h1> Explore </h1>
        </div>
        <div className="button">
          <Button id="combined-button-2" theme="clear" themeType="outline">
            <TextIconSpacing icon={<ChatSVGIcon />} iconAfter>
              Read More
            </TextIconSpacing>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
