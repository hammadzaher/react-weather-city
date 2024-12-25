// import logo from './logo.svg';
import axios from "axios";
import "./App.css";
import { use, useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [WeatherData, setWeatherData] = useState({});
  const [call , setCall] = useState(false)

  const callWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}`
      )
      .then(function (response) {
        setWeatherData(response.data);
        setCall(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="parent">
      <div className="parent1">
      <form onSubmit={callWeather}>
        <input
          type="text"
          placeholder="Enter Your City"
          id="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        </form>
        <button>Click me!!</button>
      </div>
      {/* // /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ */}
      {(call)?
      <div className="dispaly">
      <div className="result">
      <h1>{WeatherData?.location?.name} {WeatherData?.location?.region} {WeatherData?.location?.country}</h1>
      <h3>Temperature: {WeatherData?.current?.temp_c}°c</h3>
      <h3>FeelsLike: {WeatherData?.current?.feelslike_c}°c</h3>
      <h3>Temperature: {WeatherData?.current?.temp_f}°F</h3>
      <h3>FeelsLike: {WeatherData?.current?.feelslike_f}°F</h3>
      <h3>Humidity: {WeatherData?.current?.humidity}</h3>
      </div>
      </div>
      :
      null
      }
      
   
    </div>
  );
}

export default App;
