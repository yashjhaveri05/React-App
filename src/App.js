import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./components/Weather";
import Navigation from "./components/Nav";
import About from "./components/About";
import Recipes from "./components/Recipes";
import CoronaTracker from "./components/CoronaTracker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/weather" component={Weather} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/corona" component={CoronaTracker} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;