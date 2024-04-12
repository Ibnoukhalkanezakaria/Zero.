// import React, { useEffect, useState } from "react";
// import axios from "axios";
import HomeCnt from "../../components/Home/HomeCnt";

const Home = () => {
  //   const [user, setUser] = useState(null);
  //   const [error, setError] = useState(null);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // Fetching the refresh token
  //         const refreshTokenResponse = await axios.post(
  //           "http://localhost:3001/api/auth/refresh"
  //         );
  //         const refreshToken = refreshTokenResponse.data.refreshToken;
  //         // Fetching the user data using the access token
  //         const accessTokenResponse = await axios.get(
  //           "http://localhost:3001/api/auth/home",
  //           {
  //             headers: {
  //               Authorization: `Bearer ${refreshToken}`,
  //             },
  //           }
  //         );
  //         setUser(accessTokenResponse.data);
  //       } catch (err) {
  //         setError(err.response.data.error || "An error occurred");
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //   return (
  //     <>
  //       {error && <div>{error}</div>}
  //       {user && <HomeCnt user={user} />}
  //     </>
  //   );
  <>
    <HomeCnt />
  </>;
};

export default Home;
