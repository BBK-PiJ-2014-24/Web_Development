import React from "react";
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

export default Header;
