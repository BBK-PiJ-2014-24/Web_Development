import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }
  // This is loaded immediately after the component is mounted to the DOM
  // It therefore makes sense to do the Fetch within this fn.
  // 1. parse to JSON
  // 2. pass api data to component's state via setState()
  componentDidMount() {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")
      .then((res) => res.json())
      .then((responseData) => {
        this.setState({ gifs: responseData.data });
      })
      .catch((err) => {
        console.log("Fail to Fetch and Pass Data", err);
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}
