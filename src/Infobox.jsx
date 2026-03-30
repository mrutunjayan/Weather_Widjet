import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./Infobox.css";

function Infobox({ info }) {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1667143324668-064f130f731d?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671490808715-1135473e2ccb?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}&nbsp;{
                 info.humidity > 80
                ?<ThunderstormIcon/>
                : info.temp > 15
                  ? < WbSunnyIcon/>
                  : < AcUnitIcon/>
              }
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}&deg;C</p>
              <p>Min Temp={info.tempMin}&deg;C</p>
              <p>Max Temp={info.tempMax}&deg;C</p>
              <p>
                The Weather can be described as <i>${info.weather}</i> feels
                like {info.feelsLike}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Infobox;
