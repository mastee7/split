import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Watch from "./pages/Watch/Watch";
import Profile from "./pages/Profile/Profile";

import { AuthContext } from "./context/authContext/AuthContext";
import VideoCreation from "./pages/VideoCreation/VideoCreation";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={user ? <Home /> : <SignIn />} />
        <Route path="/signup" element={user ? <Home /> : <SignUp />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<VideoCreation />} />
      </Routes>
    </div>
  );
}

export default App;
