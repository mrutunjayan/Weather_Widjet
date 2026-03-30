import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Searchbox.css";

function Searchbox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [err, setErr] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "52dc5244b931f85ea4769d136cc050d8";

  let weatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      let jsonResponse = await response.json();
      console.log(jsonResponse);

      if (jsonResponse.cod !== 200) {
        throw new Error("City not found");
      }

      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log(result);
      return result;

    } catch (error) {
      throw error; 
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newInfo = await weatherInfo();
      updateInfo(newInfo);
      setErr(false);
      setCity("");
    } catch {
      setErr(true); 
    }
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />

        <Button variant="contained" type="submit">
          Search
        </Button>
        {err && <p style={{ color: "red" }}>No Such Place exists!</p>}
      </form>
    </div>
  );
}

export default Searchbox;