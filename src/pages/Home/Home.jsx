import React from "react";
import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";

export default function Home() {
  let videos = Array.apply(null, Array(10)).map(function () {})
  return (
    <div>
      <Navbar />
      <div className={styles.home} id={styles.home}>
        <Sidebar />
        <div className={styles.thumbnailSection}>
          {videos.map((index, e) => (
            <VideoThumbnail id={index} title="Baby falls into toilet and then farts" url="bonk"/>
          ))}
        </div>
      </div>
    </div>
  );
}
