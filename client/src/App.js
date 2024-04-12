import "./global_style/global.css";
import "./global_style/normalize.css";
import "./global_style/style.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="home-cnt bg-secondary-clr Wrapper">
          <nav className="nav-bar">
            <h5 className="f5">Zero.</h5>
          </nav>
          <main className="main">
            <div>
              <div>
                <h3 className="f3">
                  Reshaped the platform's user experience, making blockchain
                  technology more accessible.
                </h3>
              </div>
              <div className="btns">
                <button>username</button>
                <button>Password</button>
                <button>Sign in</button>
              </div>
            </div>
            <div>
              <h4 className="f4">p <br/> r <br/> o <br/> j <br/> e <br/> c <br/> t <br/> 0/</h4>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

const Hottun = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export default App;
