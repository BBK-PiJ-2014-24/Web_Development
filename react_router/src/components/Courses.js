import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import CSS from "./courses/CSS";
import HTML from "./courses/HTML";
import JavaScript from "./courses/JavaScript";

// React routers passes info about the route itself with prop objects
// These props ar: 'history', location, and match
// The match prop gives info about the route and the actual url
const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}/html`}>HTML</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css`}>CSS</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
        </li>
      </ul>
    </div>

    {/* Write routes here... */}
    <Route
      exact
      path={match.path}
      render={() => <Redirect to={`${match.path}/html`} />}
    />
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />
  </div>
);

export default Courses;
