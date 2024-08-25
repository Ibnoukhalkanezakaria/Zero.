import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./ProfileInCnt.css";

const ProfileInCnt = () => {
  const [useData, setUseData] = useState({});
  const [loading, setLoading] = useState(true); // Loading state
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const Logout = async () => {
    await axios.get("http://localhost:3001/api/auth/logout");
    navigate("/login");
  };

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

        // Add 2-second loading delay
        setTimeout(() => {
          setLoading(false); // Stop loading after 2 seconds
        }, 2000);
      } catch (err) {
        console.error("ERROR", err);
        setLoading(false); // Stop loading even if there's an error
        navigate("/login"); // Redirect to login page if there's an error
      }
    };

    getProfile();
  }, [navigate]);

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
            <div className="bar" onClick={() => setShow(!show)}>
              <span></span>
              <span></span>
              <div className={show ? "menu" : "menu none"}>
                <h5 className="f5">
                  <Link className="color3" to="/">
                    Home -
                  </Link>
                </h5>
                <button onClick={Logout}>
                  <Link to="/login" className="color3">
                    Logout
                  </Link>
                </button>
              </div>
            </div>
          </nav>
        </div>
        <main>
          {loading ? (
            <div className="loading">Loading...</div> // Loading effect
          ) : (
            <div className="info">
              <div className="profileImg">
                <img src={useData.profilePic} alt="Profile" />
              </div>
              <div className="title">
                <h3>{useData.username}</h3>
              </div>
              <div className="more-info">
                <span>
                  I'm From Morocco. Status{" "}
                  <span style={{ display: "inline-block", color: "green" }}>
                    Active
                  </span>
                </span>
                <span>{useData.gender}</span>
              </div>
              <div className="create">
                <p className="color3 fcaption">
                  Made by Ibnoukhalkane & Meedivo 2024.
                </p>
              </div>
              {/* <ThreeScene /> */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProfileInCnt;
