import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CitySearch from "./CitySearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>Weather App</h1>
      </div>
      <div className="container">
        <i class="fas fa-umbrella"></i>
        <CitySearch />
      </div>
      <div className="Footer">
        <small>
          Coded by Jessica Marciniak{" "}
          <a href="https://github.com/JessMarciniak/Weather-react">GitHub</a>
        </small>
      </div>
    </div>
  );
}
