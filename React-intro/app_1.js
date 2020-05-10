// React creates a JSON equilavent of an element.
// createElement(html tag, html attributes, content)

// const title = React.createElement(
//   "h1",
//   { id: "main-title", title: "Title Headline" },
//   "First React Element"
// );
// create element with JSX
// const title = <h1>First React Element</h1>;
// // const desc = <p>Second Element Inserted</p>;
// const header = React.createElement("Header", null, title, desc);

// JSX transpiles into React.createElement
// Babel converts JSX to Javascript

const title = "First React Element";
const titleid = "MyTitleId";
const desc = " Second React Element";
const header = (
  <header>
    <h1 id={titleid}>{title}</h1>
    <p className="MyClass">{desc}</p>
  </header>
);

// update the DOM - react(renderObj, the container to put the element in)
// ---------------
ReactDOM.render(header, document.getElementById("root"));
