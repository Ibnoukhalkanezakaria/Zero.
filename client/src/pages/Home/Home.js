import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCnt from "../../components/Home/HomeCnt";
import { useNavigate } from "react-router";

axios.defaults.withCredentials = true;

const Home = () => {
  return (
    <>
      <HomeCnt />
    </>
  );
};

export default Home;
