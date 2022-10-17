import React, { useEffect } from "react";
import "../styles/pages/welcome.css";

import { useLocation, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  console.log(useLocation());
  useEffect(() => {
    const interval = setTimeout(() => {
      navigate("login");
    }, 2000);
    return () => clearTimeout(interval);
  }, [navigate]);
  return (
    <div className="home ">
      <div>
        <img src="./img/Union.png" alt="" className="logo" />
      </div>
      <div>
        <h1 className="company-name">lendsqr</h1>
        {/* <img src="./img
        /lendsqr.png" alt=""  /> */}
      </div>
    </div>
  );
};

export default WelcomePage;
