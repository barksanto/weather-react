import './App.css';
const API = {
  key: '364545f834bbb6e7f867173e9f886040',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
