import React from "react";
import { Consumer } from "./Context";
import Player from "./Player";

// Consumer requires a render prop function
// () is an implicit return
const PlayerList = () => {
  return (
    <Consumer>
      {({ players }) => (
        <React.Fragment>
          {players.map((player, index) => (
            <Player {...player} key={player.id.toString()} index={index} />
          ))}
        </React.Fragment>
      )}
    </Consumer>
  );
};

export default PlayerList;
