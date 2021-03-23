import './App.css';
const API = {
  key: '364545f834bbb6e7f867173e9f886040',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">Boston, MA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
