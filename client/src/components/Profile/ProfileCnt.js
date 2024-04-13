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
    <div className="Profile">
      <div className="ProfileInCnt Wrapper bg-secondary-clr">
        <div className="">
          <nav className="nav-bar">
            <div>
              <h5 className="f5">
                <Link to="/" className="color3">
                  Zero.
                </Link>
              </h5>
            </div>
            <div className="bar">
              <span>----</span>
              <span>----</span>
            </div>
          </nav>
        </div>
        <main>
          <div className="back-img">
            <div className="profile-img">
              <img src={useData.profilePic} />
            </div>
          </div>
          <div className="edit">
            <button>Edit</button>
          </div>
          <div className="general-info">
            <h3>General Informnation:</h3>
            <div className="info">
              <h5>Username/{useData.username}</h5>
              <h5>Gender/{useData.gender}</h5>
            </div>
          </div>
          <div className="end">
            <div>
              <p className="color3 fcaption">
                Made by Ibnoukhalkane & Meedivo 2024.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileInCnt;
