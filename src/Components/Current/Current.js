import React, { useEffect, useState } from "react";
import "./Current.css";
import axios from "axios";

function Current() {
  const [current, setCurrent] = useState();

  let link =
    "http://api.weatherapi.com/v1/current.json?key=bd628cca6fd4426b99f83156221505&q=" +
    window.location.pathname.slice(9) +
    "&aqi=yes";
  useEffect(() => {
    axios
      .get(link)
      .then((Response) => {
        setCurrent(Response.data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="current">
      <h3>{current ? current.location.name : "null"}</h3>
      <h4>{current ? current.location.localtime : "null"}</h4>
      <div className="maincurrent">
        <div className="iconplus">
          <img
            src={current ? current.current.condition.icon : "null"}
            alt="Weather Icon"
            width="200px"
          ></img>
          <div className="temp">
            <h2 className="celsius">
              {current ? current.current.temp_c : "null"}
              {"\u00b0"} C
            </h2>
            <h5 className="text">
              {current ? current.current.condition.text : "null"}
            </h5>
          </div>
        </div>
        <div className="details">
          <div className="griditems">
            <p>{current ? current.current.humidity : "null"}</p>
            <h6>Humidity</h6>
          </div>
          <div className="griditems">
            <p>{current ? current.current.wind_kph : "null"}</p>
            <h6>Wind Speed (Kph)</h6>
          </div>
          <div className="griditems">
            <p>{current ? current.current.wind_dir : "null"}</p>
            <h6>Wind Direction</h6>
          </div>
          <div className="griditems">
            <p>{current ? current.current.temp_f : "null"}</p>
            <h6>Temperature(F)</h6>
          </div>
          <div className="griditems">
            <p>{current ? current.current.precip_mm : "null"}</p>
            <h6>Precipitation(mm)</h6>
          </div>
          <div className="griditems">
            <p>{current ? current.current.pressure_mb : "null"}</p>
            <h6>Pressure</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
