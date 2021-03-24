import React, { useState } from 'react';
import './App.css';

const API = {
  key: '364545f834bbb6e7f867173e9f886040',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&units=imperial&APPID=${API.key}`)
        .then(result => result.json())
        .then(res => {
          setQuery('');
          setWeather(res);
          console.log(res);
        });
    }
  }


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
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°F</div>
              <div className="weather">Description: {weather.weather[0].main}</div>

            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
