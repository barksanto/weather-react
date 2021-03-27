import React, { useState } from 'react';
import './App.css';
require('dotenv').config()

const API = {
  key: 'b7f7ba740725cadece7fa95b9c604600',
  base: 'https://api.openweathermap.org/data/2.5/'
}

// const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter" || event.type === 'click') {
      // console.log(event)
      fetch(`${API.base}weather?q=${query}&units=imperial&APPID=${API.key}`)
        .then(result => result.json())
        .then(res => {
          setQuery('');
          console.log(res);
          setWeather(res);
        });
    }
  }

  // const testSearch = (event) => {
  //   console.log(event);
  // }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate() // returns a number between 0-30
    let month = months[d.getMonth()]; //returns # between 0 and 11

    let year = d.getFullYear();

    return `${day} - ${date}/ ${month}/ ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 60) ? 'app warm' : 'app') : 'app'}>
      <main className="container">
        <div className="search-box row">
          <input
            type="text"
            className="search-bar col-10"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
          <button
            type="button"
            className="btn btn-secondary col-2 search-button"
            onClick={search}>
            <img alt="magnifying glass" src="https://img.icons8.com/emoji/32/000000/magnifying-glass-tilted-right-emoji.png" />
          </button>
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°F</div>
              <div className="weather">Description: {weather.weather[0].description}</div>

            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
