import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./HomeCnt.css";

const HomeCnt = () => {
  return (
    <div className="home">
      <div className="bg-secondary-clr Wrapper ">
        <div>
          <h1 className="f1">
            Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero
            - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero -
            Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero - Zero
            - Zero - Zero - Zero - Zero -
          </h1>
        </div>
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
