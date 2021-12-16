import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <img
          src="https://images.unsplash.com/photo-1588993608283-7f0eda4438be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdGlufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          width="100%"
          alt="pictures"
        />

        <div className="button">
          <button>+</button>
        </div>
      </div>
    );
  }
}

export default App;
