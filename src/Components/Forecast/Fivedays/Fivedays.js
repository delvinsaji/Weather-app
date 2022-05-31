import React, { useEffect, useState } from "react";
import "./Fivedays.css";
import axios from "axios";

function Fivedays() {
  const [five, setFive] = useState();
  const url = window.location.pathname;
  const url1 = url.slice(10);
  const url2 = url1.slice(0, -6);
  const url3 = url2.charAt(0).toUpperCase() + url2.slice(1);
  const link =
    "http://api.weatherapi.com/v1/forecast.json?key=bd628cca6fd4426b99f83156221505&q=" +
    url3 +
    "&days=5&aqi=no&alerts=no";
  useEffect(() => {
    axios.get(link).then((Response) => {
      setFive(Response.data);
      console.log(five);
    });
  }, []);
  return (
    <div>
      <h1 className="oo">{url3}</h1>
      <div className="five">
        <div className="fivemain">
          <p className="date">
            {five ? five.forecast.forecastday[0].date : "null"}
          </p>
          <img
            src={
              five ? five.forecast.forecastday[0].day.condition.icon : "null"
            }
          />
          <p className="te">
            {five ? five.forecast.forecastday[0].day.condition.text : "null"}
          </p>
          <p className="tt">
            {five ? five.forecast.forecastday[0].day.avgtemp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="detail">Average Temperature(C)</p>
          <p className="tt">
            {five ? five.forecast.forecastday[0].day.avghumidity : "null"}%
          </p>
          <p className="detail">Average Humidity</p>
          <p className="tt">
            {five ? five.forecast.forecastday[0].day.totalprecip_mm : "null"}
          </p>
          <p className="detail">Total Precipitation (mm)</p>
        </div>
        <div className="fivemain">
          <p className="date">
            {five ? five.forecast.forecastday[1].date : "null"}
          </p>
          <img
            src={
              five ? five.forecast.forecastday[1].day.condition.icon : "null"
            }
          />
          <p className="te">
            {five ? five.forecast.forecastday[1].day.condition.text : "null"}
          </p>
          <p className="tt">
            {five ? five.forecast.forecastday[1].day.avgtemp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="detail">Average Temperature(C)</p>
          <p className="tt">
            {five ? five.forecast.forecastday[1].day.avghumidity : "null"}%
          </p>
          <p className="detail">Average Humidity</p>
          <p className="tt">
            {five ? five.forecast.forecastday[1].day.totalprecip_mm : "null"}
          </p>
          <p className="detail">Total Precipitation (mm)</p>
        </div>
        <div className="fivemain">
          <p className="date">
            {five ? five.forecast.forecastday[2].date : "null"}
          </p>
          <img
            src={
              five ? five.forecast.forecastday[2].day.condition.icon : "null"
            }
          />
          <p className="te">
            {five ? five.forecast.forecastday[2].day.condition.text : "null"}
          </p>
          <p className="tt">
            {five ? five.forecast.forecastday[2].day.avgtemp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="detail">Average Temperature(C)</p>
          <p className="tt">
            {five ? five.forecast.forecastday[2].day.avghumidity : "null"}%
          </p>
          <p className="detail">Average Humidity</p>
          <p className="tt">
            {five ? five.forecast.forecastday[2].day.totalprecip_mm : "null"}
          </p>
          <p className="detail">Total Precipitation (mm)</p>
        </div>
      </div>
    </div>
  );
}

export default Fivedays;
