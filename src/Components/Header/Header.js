import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Current from "../Current/Current";
import { useNavigate } from "react-router-dom";
import Forecast from "../Forecast/Forecast";
import Today from "../Forecast/Today/Today";
import Fivedays from "../Forecast/Fivedays/Fivedays";

function Header() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  return (
    <div>
      <div className="header_main">
        <h1 className="logo">THE WEATHER</h1>
        <div className="elements">
          <h6
            onClick={() => {
              navigate(`/current/${city}`, { replace: true });
            }}
          >
            Current
          </h6>
          <h6
            onClick={() => {
              navigate(`/forecast/${city}`, { replace: true });
            }}
          >
            Forecast
          </h6>
          <div className="search_bar">
            <input
              className="search"
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                console.log(city);
              }}
              placeholder="Enter a City"
            ></input>
            <img
              className="searchicon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/VisualEditor_-_Icon_-_Search.svg/768px-VisualEditor_-_Icon_-_Search.svg.png"
              alt="Search icon"
              onClick={() => {
                navigate(`/current/${city}`, { replace: true });
              }}
            ></img>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/current/:cityname" element={<Current />}></Route>
        <Route path="/forecast/:cityname/" element={<Forecast />}>
          <Route path="today" element={<Today />}></Route>
          <Route path="5days" element={<Fivedays />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Header;
