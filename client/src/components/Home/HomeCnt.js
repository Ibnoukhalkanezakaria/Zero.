import React from "react";
import { Link } from "react-router-dom";

const HomeCnt = () => {
  return (
    <div>
      HomeCnt
      <button>
        <Link to="/login">Enter</Link>
      </button>
    </div>
  );
};

export default HomeCnt;
