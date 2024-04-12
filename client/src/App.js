import "./global_style/global.css";
import "./global_style/normalize.css";
import "./global_style/style.css";

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
  } 

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
                <h3 className="f3 firsth3">
                  Reshaped the platform's user experience, making blockchain
                  technology more accessible.
                </h3>
              </div>
              <form className="btns" onSubmit={handleSubmit}>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <button>Sign in</button>
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
            <p className="fcaption">
              Made by Ibnoukhalkane & Meedivo 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
