import "./global_style/global.css";
import "./global_style/normalize.css";
import "./global_style/style.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./pages/Log_in/Login";
import SignUp from "./pages/Sign_up/Sign_up";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
