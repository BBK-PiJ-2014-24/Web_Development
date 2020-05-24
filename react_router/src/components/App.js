import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

// Use BrowserRouter Component to contain all routes
// Use Route component for each route
// Contain all routes in a Switch, so that it only selects the first matched route. If no
// matches are found then defaults to error page
// If there are no props, use component={}
// If using props, use a render={component +props}
// The params within the URL are captures in the match object within the automatic Route prop
const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => <About title="About Title" />} />
        <Route exact path="/teachers" component={Teachers} />
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
