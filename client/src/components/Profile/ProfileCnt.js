import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ProfileInCnt.css";

const ProfileInCnt = () => {
  const [useData, setUseData] = useState({});

  useEffect(() => {
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
        setUseData({
          username: accessTokenResponse.data.user.username,
          gender: accessTokenResponse.data.user.gender,
          profilePic: accessTokenResponse.data.user.profilePic,
        });
      } catch (err) {
        console.error("ERROR", err);
      }
    };
    getProfile();
  }, []);

  return (
    <div className="LogIn">
      <div className="LogInCnt Wrapper bg-secondary-clr">
        <div className="">
          <nav className="nav-bar">
            <h5 className="f5">
              <Link to="/" className="color3">
                Zero.
              </Link>
            </h5>
          </nav>
          <img src={useData.profilePic} alt="image" />
          <h1>username: {useData.username}</h1>
          <h1>gender: {useData.gender}</h1>
          <button>
            <Link to="/login">Logout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileInCnt;
