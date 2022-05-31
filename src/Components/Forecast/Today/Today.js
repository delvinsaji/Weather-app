import React, { useEffect, useState } from "react";
import "./Today.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Today() {
  const [day, setDay] = useState();
  const url = window.location.pathname;
  const url1 = url.slice(10);
  const url2 = url1.slice(0, -6);
  const url3 = url2.charAt(0).toUpperCase() + url2.slice(1);
  const link =
    "http://api.weatherapi.com/v1/forecast.json?key=bd628cca6fd4426b99f83156221505&q=" +
    url2 +
    "&days=1&aqi=no&alerts=no";
  useEffect(() => {
    axios.get(link).then((Response) => {
      setDay(Response.data);
      console.log(day);
    });
  }, []);
  return (
    <div>
      <h1 className="aa">{url3}</h1>
      <div className="forecast_first">
        <img
          src={day ? day.forecast.forecastday[0].day.condition.icon : "null"}
        />
        <div className="sub">
          <p className="avgtemp">
            {day ? day.forecast.forecastday[0].day.avgtemp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="forecasttext">
            {day ? day.forecast.forecastday[0].day.condition.text : "null"}
          </p>
        </div>
      </div>
      <div className="otherdetails">
        <div className="otherdetails1">
          <p className="xx">
            {day ? day.forecast.forecastday[0].day.avghumidity : "null"}
          </p>
          <p>Average Humidity</p>
        </div>
        <div className="otherdetails1">
          <p className="xx">
            {day ? day.forecast.forecastday[0].day.avgtemp_f : "null"}
          </p>
          <p>Average Temperature (F)</p>
        </div>
        <div className="otherdetails1">
          <p className="xx">
            {day ? day.forecast.forecastday[0].day.maxtemp_c : "null"}
          </p>
          <p>Maximum Temperature (C)</p>
        </div>
        <div className="otherdetails1">
          <p className="xx">
            {day ? day.forecast.forecastday[0].day.maxwind_kph : "null"}
          </p>
          <p>Maximum wind speed (KPH)</p>
        </div>
        <div className="otherdetails1">
          <p className="xx">
            {day ? day.forecast.forecastday[0].day.totalprecip_mm : "null"}
          </p>
          <p>Total Precipitation(mm)</p>
        </div>
      </div>
      <div className="hours">
        <div className="hours1">
          <h3>3:00 AM</h3>

          <img
            src={
              day ? day.forecast.forecastday[0].hour[3].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[3].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[3].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[3].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[3].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
        <div className="hours1">
          <h3>6:00 AM</h3>
          <img
            src={
              day ? day.forecast.forecastday[0].hour[6].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[6].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[6].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[6].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[6].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
        <div className="hours1">
          <h3>9:00 AM</h3>
          <img
            src={
              day ? day.forecast.forecastday[0].hour[9].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[9].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[9].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[9].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[9].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
        <div className="hours1">
          <h3>12:00 PM</h3>
          <img
            src={
              day ? day.forecast.forecastday[0].hour[12].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[12].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[12].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[12].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[12].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
        <div className="hours1">
          <h3>3:00 PM</h3>
          <img
            src={
              day ? day.forecast.forecastday[0].hour[15].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[15].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[15].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[15].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[15].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
        <div className="hours1">
          <h3>6:00 PM</h3>
          <img
            src={
              day ? day.forecast.forecastday[0].hour[18].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[18].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[18].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[18].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[18].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
        <div className="hours1">
          <h3>9:00 PM</h3>
          <img
            src={
              day ? day.forecast.forecastday[0].hour[21].condition.icon : "null"
            }
          />
          <p>
            {day ? day.forecast.forecastday[0].hour[21].condition.text : "null"}
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[21].temp_c : "null"}
            {"\u00b0"} C
          </p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[21].humidity : "null"}%
          </p>
          <p className="forsub">Humidity</p>
          <p className="formain">
            {day ? day.forecast.forecastday[0].hour[21].wind_kph : "null"}
          </p>
          <p className="forsub">Wind Speed (KPH)</p>
        </div>
      </div>
    </div>
  );
}

export default Today;
