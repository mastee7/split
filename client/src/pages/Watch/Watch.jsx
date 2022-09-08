import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import RecommendationThumbnail from "../../components/RecommendationThumbnail/RecommendationThumbnail";
import SplitVideo from "../../components/SplitVideo/SplitVideo";

import styles from "./Watch.module.css";

export default function Watch() {
  const [urlChanged, setUrlChanged] = useState(false);

  useEffect(()=>{
    console.log(new URLSearchParams(window.location.search).get('v'));
    setUrlChanged(false);
  }, [urlChanged])
  
  return (
    <div>
      <Navbar />
      <div className={styles.watch}>
        <div className={styles.left}>
          <div className={styles.video}>
            <SplitVideo />
            <div className={styles.title}>Loveneet kills squirrels</div>
            <div className={styles.description}>Description</div>
          </div>
        </div>
          
        <div className={styles.recommendations}>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
          <RecommendationThumbnail setUrlChanged={setUrlChanged}/>
        </div>
      </div>
    </div>
  );
}
