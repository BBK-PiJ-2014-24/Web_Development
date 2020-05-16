import React from "react";

// This function is a reduce mapping over players
const Stats = (props) => {
  const totalPlayers = props.players.length;
  const totalPoints = props.players.reduce((sum, p) => {
    return sum + p.score;
  }, 0);

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
