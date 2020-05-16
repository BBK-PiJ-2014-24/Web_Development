import React, { Component } from "react";

class AddPlayerForm extends Component {
  state = {
    value: "",
  };

  handleFormValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // blocks submission to server as change done on sheet
    this.props.addPlayer(this.state.value);
    this.setState({ value: "" }); // change box to empty after submission
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          placeholder="Enter Player Name"
          onChange={this.handleFormValueChange}
        />

        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerForm;
