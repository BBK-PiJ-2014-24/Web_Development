// Components can be functions or classes but MUST start with a CAPITAL LETTER
// Components return React Elements
// function Headerfn() {
// function Headerfn() {
//   return (
//     <header>
//       <h1> Scorecard</h1>
//       <span className="stats">Player: 1</span>
//     </header>
//   );
// }
// ES6 Style
// ----------
// const Headerfn = () => {
//   return (
//     <header>
//       <h1> Scorecard</h1>
//       <span className="stats">Player: 1</span>
//     </header>
//   );
// };
// PROPS
// -----
// props are immutable), funtions can ever change them. The (parent) component higher
// in the tree owns and controls the property values.
// props can be propogated down into subcomponents, whereever they are called.
// Props are used in "Stateless Functional Components"
//
// STATE
// -----
// to mutate dynamic data, one uses variables in a state object
// State Can only be included in class objects.

// ES6 + Implicit Return
// --------------------
const Headerfn = (props) => (
  <header>
    <h1> {props.titleProp}</h1>
    <span className="stats">Player: {props.totalPlayersProp}</span>
  </header>
);

// Player Component with Counter Component as Composition
// ----------------
const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>
      <Counter />
    </div>
  );
};

// Counter Component
// -----------------
class Counter extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       score: 0,
  //     };
  //   }
  // state can be initialized like as a class property and babel will wrap it in a constructor behind the scences
  state = {
    score: 0,
  };

  // Add Event Handlers on the Class
  // --------------------------------
  // to change state, you must class method setState, which will trigger render() after state change
  // also state should be immutable as the setState() is async (causing concurrency issues)
  // so pass setState a callback with previous State passed as argument
  incrementScore() {
    this.setState((prevState) => {
      return {
        score: prevState.score + 1,
      };
    });
  }

  decrementScore = () => {
    this.setState((prevState) => ({
      score: prevState.score - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          {" "}
          -{" "}
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={() => this.incrementScore()}
        >
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

// Main Container Component
// -------------------------
// the App's state can be seen by its child containers
class App extends React.Component {
  state = {
    players: [
      {
        id: 1,
        name: "Guil",
      },
      {
        id: 2,
        name: "Treasure",
      },
      {
        id: 3,
        name: "Ashley",
      },
      {
        id: 4,
        name: "James",
      },
    ],
  };

  // Add Event Handlers on Class
  handleRemoverPlayer = (id) => {
    this.setState = (prevState) => {
      return {
        players: prevState.filter((p) => p.id !== id),
      };
    };
  };

  render() {
    return (
      <div className="scoreboard">
        <Headerfn
          titleProp="ScoreCard"
          totalPlayersProp={this.state.players.length}
        />
        {/* Player List*/}
        {this.state.players.map((p) => (
          <Player
            name={p.name}
            id={player.id.toString}
            removePlayer={this.handleRemoverPlayer}
            key={p.id.toString()}
          />
        ))}
      </div>
    );
  }
}
// update the DOM - react(renderObj, the container to put the element in)
// ---------------
ReactDOM.render(<App />, document.getElementById("root"));
