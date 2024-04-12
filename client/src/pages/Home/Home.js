import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCnt from "../../components/Home/HomeCnt";

axios.defaults.withCredentials = true;

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const refreshTokenResponse = await axios.post(
          "http://localhost:3001/api/auth/refresh"
        );
        const accessToken = refreshTokenResponse.data.accessToken;
        const accessTokenResponse = await axios.get(
          "http://localhost:3001/api/auth/home",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUser(accessTokenResponse.data);
      } catch (err) {
        setError(err.response.data.error || "An error occurred");
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {error && <div>{error}</div>}
      {user && <HomeCnt user={user} />}
    </>
  );
};

export default Home;
