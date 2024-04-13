import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomeCnt.css";
import { useNavigate } from "react-router";
// import { unstable_HistoryRouter } from "react-router-dom";
axios.defaults.withCredentials = true;

const HomeCnt = () => {
  const [percentage, setPercentage] = useState(0);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
    const getProfile = async () => {
      try {
        const refreshTokenResponse = await axios.post(
          "http://localhost:3001/api/auth/refresh"
        );
        const accessToken = refreshTokenResponse.data.accessToken;
        const accessTokenResponse = await axios.get(
          "http://localhost:3001/api/profile",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (percentage >= 100) {
          setShow(true);
          navigate("/profile");
        }
      } catch (err) {
        if (percentage >= 100) {
          setShow(true);
          navigate("/login");
        }
      }
    };
    getProfile();
  }, [percentage]);
  return (
    <div
      className={
        show ? "HomeCnt bg-color4 Wrapper" : "HomeCnt bg-secondary-clr Wrapper"
      }
    >
      <div className="scroll-right">
        <h1 className="f1 color3">
          Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
          Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
          Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
          Zero - Zero - Zero -{" "}
        </h1>
      </div>
      <div className="scroll-left">
        <h1 className="f1 color3">
          Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
          Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
          Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
          Zero - Zero - Zero -{" "}
        </h1>
      </div>
      <div className="flex-end">
        <div>
          <p className="color3 fcaption">
            Made by Ibnoukhalkane & Meedivo 2024.
          </p>
        </div>
        <div>
          <h1 className="color3">/({percentage}%)</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeCnt;
