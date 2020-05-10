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
// ARRAYS in REACT
// ---------------
// child elements must have id as they are used as an index in the React-Dom
// These ids must be passed as a KEY IF THEY ARE ITERATED OVER to become Childs
const players = [
  {
    id: 1,
    name: "Guil",
    score: 50,
  },
  {
    id: 2,
    name: "Treasure",
    score: 85,
  },
  {
    id: 3,
    name: "Ashley",
    score: 95,
  },
  {
    id: 4,
    name: "James",
    score: 80,
  },
];
// PROPS
// -----
// props are immutable), funtions can ever change them. The (parent) component higher
// in the tree owns and controls the property values.
// props can be propogated down into subcomponents, whereever they are called.
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
      <Counter score={props.score} />
    </div>
  );
};

// Counter Component
// -----------------
const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

// Main Container Component
// -------------------------
// Dynamic data passed to the component through "Props", which are key-value attributes in the tag
// Note that the KEY must be passed so that REACT can index child components
// Note also that the MAP needs to be wrapped in a {map()} as it is a javascript function
const App = (props) => {
  return (
    <div className="scoreboard">
      <Headerfn
        titleProp="ScoreCard"
        totalPlayersProp={props.initalPlayersProp.length}
      />
      {/* Player List*/}
      {props.initalPlayersProp.map((p) => (
        <Player name={p.name} score={p.score} key={p.id.toString()} />
      ))}
    </div>
  );
};

// update the DOM - react(renderObj, the container to put the element in)
// ---------------
// <Headerfn /> is a JSX React Component, identified by its capital LETTER
ReactDOM.render(
  <App initalPlayersProp={players} />,
  document.getElementById("root")
);
