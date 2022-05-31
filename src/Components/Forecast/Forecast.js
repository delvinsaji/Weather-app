import React from "react";
import "./Forecast.css";
import { Outlet, useNavigate } from "react-router-dom";

function Forecast() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="buttons">
        <p
          onClick={() => {
            if (window.location.pathname.slice(-5) == "5days") {
              navigate(`${window.location.pathname.slice(0, -6)}/today`, {
                replace: true,
              });
            } else {
              navigate(`${window.location.pathname}/today`, { replace: true });
            }
          }}
        >
          Today
        </p>
        <p
          onClick={() => {
            if (window.location.pathname.slice(-5) == "today") {
              navigate(`${window.location.pathname.slice(0, -6)}/5days`, {
                replace: true,
              });
            } else {
              navigate(`${window.location.pathname}/5days`, { replace: true });
            }
          }}
        >
          Next 3 Days
        </p>
      </div>
      <Outlet />
    </div>
  );
}

export default Forecast;
