import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

// PureComponent only updates and renders the element that has changed not the component.
// PropTypes can be inserted as a property on
class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes,
  };

  render() {
    const { name, id, score, index, removePlayer, changeScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}
export default Player;
