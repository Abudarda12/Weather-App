import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import React, { useState } from "react";
import '../Style/weather.css'
 
export default function WeatherApp() {
    const[weatherInfo,setWeatherInfo] = useState({
        name: "City Name",
        weather: "Dusty",
        temprature: '',
        humidity: '',
        temperature_min: '',
        temperature_max: '',
        feelslike: '',
    });
    let handleWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return(
        <>
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox handleWeatherInfo={handleWeatherInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
        </>
    )
}