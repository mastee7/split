import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Watch from "./pages/Watch/Watch";
import {Account} from "./services/Account"

function App() {
  return (
    <div>
      <Account>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </Account>
    </div>
  );
}

export default App;
