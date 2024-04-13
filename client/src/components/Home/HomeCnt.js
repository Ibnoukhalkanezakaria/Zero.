import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./HomeCnt.css";
axios.defaults.withCredentials = true;

const HomeCnt = () => {
  let number = 100;
  const [percentage, setPercentage] = useState(0);
  const [show, setShow] = useState(false);

  // percentage++;
  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        } else {
          clearInterval(timer);
        }
      },
      percentage < 1
        ? 1200
        : percentage > 1 && percentage < 25
        ? 20
        : percentage > 25 && percentage < 45
        ? 10
        : 4
    );

    // return clearInterval(timer);
    if (percentage == 100) {
      setShow(true);
    }
  }, [percentage]);
  return (
    <div
      className={
        show ? "HomeCnt bg-color4 Wrapper" : "HomeCnt bg-secondary-clr Wrapper"
      }
    >
      <div className="flex-end">
        <div>
          <p>Made by Ibnoukhalkane & Meedivo 2024</p>
        </div>
        <div>
          <h1 className="color3">/({percentage}%)</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCnt;
