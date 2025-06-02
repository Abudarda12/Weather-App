import "../Style/search-box.css";
import React, { useState } from "react";

export default function SearchBox({handleWeatherInfo}) {
  let [city, setCity] = useState("");
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY='75070807011eba8ab073c2dd1eba1584';
    
    let getWeather = async ()=>{
     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let data = await response.json();
     
     
     let weatherData = {
      name: data.name,
      weather: data.weather[0].description,
      temprature: data.main.temp,
      humidity: data.main.humidity,
      temperature_min: data.main.temp_min,
      temperature_max: data.main.temp_max,
      feelslike: data.main.feels_like,
     }

     console.log(weatherData);
     return weatherData;
    }


    const handleSearch = (e) => {
     setCity(e.target.value);
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        console.log("Searching for weather in:", city);
        setCity("");
       let newInfo = await getWeather();
       handleWeatherInfo(newInfo);
        
    }
  return (
    <>
    
      <div className="search-box">
        <form onSubmit={handleSubmit}>
          <input type="text" id="city" placeholder="Enter City Name" required onChange={handleSearch} value={city}/>&nbsp;&nbsp;
          <button type="submit" >Search</button>
        </form>
      </div>
    </>
  );
}
