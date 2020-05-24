import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";

import StudentForm from "./components/StudentForm";
import Modal from "./components/Modal";

// Portal are used for injection of overlays and modals, which go over the DOM
// They are separate to the DOM tree.
// Portals are created with ReactDOM.createPortal()
// createPortal() has 2 arguments - the element/component to inject, location of injection
class App extends Component {
  handleClick = () => {
    console.log("Button Clicked");
  };
  render() {
    return (
      <div className="App" onClick={this.handleClick}>
        {ReactDOM.createPortal(
          <h1>HEllo FRom Inside Potal</h1>,
          document.getElementById("my-portal")
        )}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <StudentForm />
        <Modal>
          <div className="modal">This is the Modal Window</div>
          <button>Close x</button>
        </Modal>
      </div>
    );
  }
}

export default App;
