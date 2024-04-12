import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./HomeCnt.css";
axios.defaults.withCredentials = true;

const HomeCnt = () => {
  return (
    <div className="home bg-secondary-clr Wrapper ">
      <div className="container">
        <div className="scroll">
          <div className="rightToLeft">
            <h1>
              Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
              Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
              Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
              Zero - Zero - Zero - Zero - Zero - Zero -
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex-end">
          <div>
            <p className="fcaption">Made by Ibnoukhalkane & Meedivo 2024</p>
          </div>
          <div>
            <h1 className="f1">100%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCnt;
