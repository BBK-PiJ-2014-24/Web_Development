import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
//import CSS from "./courses/CSS";
//import HTML from "./courses/HTML";
//import JavaScript from "./courses/JavaScript";
import CourseContainer from "./courses/CourseContainer";
import { HTMLCourses, CSSCourses, JSCourses } from "../data/courses";

// React routers passes info about the route itself with prop objects
// These props ar: 'history', location, and match
// The match prop gives info about the route and the actual url
// Rather than being sent to a webpage, the routes below are rendered to a
// React Container, CourseContainer
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
    <Route
      path={`${match.path}/html`}
      render={() => <CourseContainer data={HTMLCourses} />}
    />
    <Route
      path={`${match.path}/css`}
      render={() => <CourseContainer data={CSSCourses} />}
    />
    <Route
      path={`${match.path}/javascript`}
      render={() => <CourseContainer data={JSCourses} />}
    />
  </div>
);

export default Courses;
