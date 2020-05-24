import React, { Component } from "react";
import { sendError } from "../error-config";

// Error Boundary allows u to wrap a container so only that part fails and the rest of the
// page renders
export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  // To catch Errors use 'componentDidCatch()' function
  componentDidCatch(err, info) {
    this.setState({ hasError: true });
    sendError.captureException(err, { extra: info });
  }

  render() {
    if (this.state.hasError) {
      return <h2>This is my ErrorBoundary Msg </h2>;
    } else {
      return this.props.children;
    }
  }
}
