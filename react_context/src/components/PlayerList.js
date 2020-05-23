import React from "react";
import { Consumer } from "./Context";
import PropTypes from "prop-types";
import Player from "./Player";

// Consumer requires a render prop function
// () is an implicit return
const PlayerList = (props) => {
  return (
    <Consumer>
      {(context) => (
        <React.Fragment>
          {context.players.map((player, index) => (
            <Player
              {...player}
              key={player.id.toString()}
              index={index}
              removePlayer={props.removePlayer}
            />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};

PlayerList.propTypes = {
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;
