import React, { useEffect, useState } from "react";
import "../App.css";
import "../index.css";


const Weather = () => {
  const APP_KEY = "d9f018ab094f5f7a34df0ec41f79c368";

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("Mumbai");

  useEffect(() => {
    getWeather();
  }, [query]);

  const getWeather = async() => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${APP_KEY}`);
    const data = await response.json();
    setWeather(data);
    /*console.log(data);*/
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month}, ${year}`
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="Weather">
     <main>
      <h3>#Made using <a href="https://openweathermap.org/api">OpenWeatherMapAPI</a></h3>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="date"><h1>{dateBuilder(new Date())}</h1></div>
            <div className="location"><h1>{weather.name}</h1></div>
            <div className="coords"><h3>Latitude:{weather.coord.lat},Longitude:{weather.coord.lon}</h3></div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="temp-extra">
              <h2>Feels like:{Math.round(weather.main.feels_like)}°C</h2>
              <h2>Temp_Max: {Math.round(weather.main.temp_max)}°C  |  Temp_Min: {Math.round(weather.main.temp_min)}°C</h2>
            </div>
            <div className="humidity"><h1>Humidity: {weather.main.humidity}%</h1></div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
     </main>
    </div>
  );
};

export default Weather;