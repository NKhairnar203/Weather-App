import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);

  const showData = (input) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${"2d3210fdf4432bb60602f5d4256bb3e5"}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the weather data", error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      showData(input);
    }, 500);
  }, [input]);

  return (
    <>
      <div>
        <h1>Find Your Wheather</h1>
      </div>

      <div className="card">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter City Name, Pincode"
        />
      </div>
      <div>
        {weather && (
          <div className="box-card">
            <h2>Weather in {weather.name}</h2>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
