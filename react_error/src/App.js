import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

import StudentForm from "./components/StudentForm";

// Error Boundary allows u to wrap a container so only that part fails and the rest of the
// page renders
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ErrorBoundary>
          <StudentForm />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
