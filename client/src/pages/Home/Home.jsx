import React from "react";
import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";

import { AuthContext } from "../../context/authContext/AuthContext";
import { useContext } from "react";

export default function Home() {
  const {user} = useContext(AuthContext);
  
  let videos = Array.apply(null, Array(30)).map(function () {})
  return (
    <div>
      <Navbar />
      <div className={styles.home} id={styles.home}>
        <Sidebar />
        <div className={styles.thumbnailSection}>
          {videos.map((index, e) => (
            // Added a key
            <VideoThumbnail key={index} title="Baby falls into toilet and then farts" url="bonk"/>
          ))}
        </div>
      </div>
    </div>
  );
}
