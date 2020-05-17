import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = (props) => {
  const { players, title } = props; // use destructuring on the props. eg props.title -> title
  return (
    <header>
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};
// npm install --save prop-types
Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

Header.defaultProps = {
  title: "Default Scorecard Name",
};

export default Header;
