import React, { useState } from 'react'
import Searchbox from "./Searchbox"
import Infobox from "./Infobox"

function WeatherApp() {
let [weatherInfo, setWeatherInfo] = useState({
  city: "Delhi",
  feelsLike: 26.05,
  temp: 26.05,
  tempMin: 26.05,
  tempMax: 26.05,
  humidity: 50,
  weather: "broken clouds",
});

let updateInfo=(result)=>{
    setWeatherInfo(result)
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>Weather App..!</h1>
      <Searchbox updateInfo={updateInfo}/>
      <Infobox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
