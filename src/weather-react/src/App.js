import React from "react";
import CitySearch from "./CitySearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CitySearch />
      <br />
      <small>
        Coded by Jessica Marciniak{" "}
        <a href="https://github.com/JessMarciniak/Weather-react">GitHub</a>
      </small>
    </div>
  );
}
