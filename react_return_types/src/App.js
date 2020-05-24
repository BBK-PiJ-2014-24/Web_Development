import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import Teachers from "./Teachers";
import Footer from "./Footer";

// Before React16, render() could handle only one single <div> element.
// In React16, u can return an ARRAY of ELEMENTS
// See also JSTeachers Component returning an array.
// React16 also allows you to return strings or numbers
class App extends Component {
  render() {
    return [<Header key="h" />, <Teachers key="t" />, <Footer key="f" />];
  }
}

export default App;
