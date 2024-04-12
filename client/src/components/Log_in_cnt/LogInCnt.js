import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogInCnt = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const getResponse = async (e) => {
    console.log(e);
    // return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:3001/api/auth/login", {
        username,
        password,
      });
      setShow("Login Successfully");
      // return <Link to="/" />;
      //  Link
    } catch (err) {
      console.log(err.response.data.error);
      setShow(err.response.data.error);
      return err.response.data.error;
    }
  };
  return (
    <div>
      <div className="home">
        <div className="home-cnt bg-secondary-clr Wrapper">
          <nav className="nav-bar">
            <h5 className="f5 logo">
              {/* <Link to="/">Zero.</Link> */}
              Zero.
            </h5>
          </nav>
          <main className="main">
            <div>
              <div>
                <h3 className="f3 firsth3">
                  Reshaped the platform's user experience, making blockchain
                  technology more accessible.
                </h3>
              </div>
              <form className="btns" onSubmit={handleSubmit}>
                <input
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="check">
                  <div>
                    <p
                      className={
                        show === "Login Successfully"
                          ? "successfully"
                          : "hidden"
                      }
                    >
                      {show}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setShow(!show)}
                      // show={show}
                      // setShow={setShow}
                    >
                      <Link>Login</Link>
                      {/* {if(show){

                      }} */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h5 className="f5 firsth4">
                p <br /> r <br /> o <br /> j <br /> e <br /> c <br /> t <br /> 0{" "}
                <br /> /
              </h5>
            </div>
          </main>
          <div className="made">
            <p className="fcaption">Made by Ibnoukhalkane & Meedivo 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInCnt;
