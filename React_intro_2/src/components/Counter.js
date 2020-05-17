import React from "react";
import PropTypes from "prop-types";

// props destructuring of props right from the function signature
const Counter = ({ index, score, changeScore }) => {
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => changeScore(index, -1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(index, 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

//Type Check on Properties
// -----------------------
Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
};

export default Counter;
