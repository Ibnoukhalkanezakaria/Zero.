import "./global_style/global.css";
import "./global_style/normalize.css";
import "./global_style/style.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/Log_in/Login";
import SignIn from "./pages/Sign_in/Sign_in";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
