import React from "react";
import WorldWide from "./Total";
import Country from "./Country";
import CovidImage from '../images/covid.jpg';
import "../App.css";

function App() {
  return (
      <div className="covid">
        <img src={CovidImage} className="img-fluid" alt="CovidTracker" />
        <h3>#Made using <a href="https://covid19.mathdro.id/api/">covid19.mathdro.id/api</a></h3>
        <WorldWide />
        <Country />
      </div>
  );
}

export default App;