import React from "react";
import { NavLink } from "react-router-dom";
// <Link /> is a React Router component allows users to navigate between routes?
// <NavLink /> is a Link that allows u to change the css stlying, when u hit it
const Header = () => (
  <header>
    <span className="icn-logo">
      <i className="material-icons">code</i>
    </span>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/teachers">Teachers</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
