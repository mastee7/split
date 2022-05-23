import React, { useState, useRef, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "./SplitVideo.module.css";

// MaterialUI icons
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";

import SplitVideoButton from "../SplitVideoButton/SplitVideoButton";
import SplitVideoModal from "../SplitVideoModal/SplitVideoModal";

export default function SplitVideo() {
  // Only for testing, take it out in production
  const sampleQuestion = {
    question: "What is Loveneet's real name?",
    answers: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur! Illum commodi cupiditate rem nostrum, dolore incidunt neque recusandae nobis voluptatibus ipsam. Deleniti debitis consequatur consectetur, dolorum et quos perspiciatis?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur! Illum commodi cupiditate rem nostrum, dolore incidunt neque recusandae nobis voluptatibus ipsam. Deleniti debitis consequatur consectetur, dolorum et quos perspiciatis?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur! Illum commodi cupiditate rem nostrum, dolore incidunt neque recusandae nobis voluptatibus ipsam. Deleniti debitis consequatur consectetur, dolorum et quos perspiciatis?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur! Illum commodi cupiditate rem nostrum, dolore incidunt neque recusandae nobis voluptatibus ipsam. Deleniti debitis consequatur consectetur, dolorum et quos perspiciatis?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aspernatur! Illum commodi cupiditate rem nostrum, dolore incidunt neque recusandae nobis voluptatibus ipsam. Deleniti debitis consequatur consectetur, dolorum et quos perspiciatis?"
    ]
    
  }

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const [isModal, setIsModal] = useState(true);

  const videoRef = useRef();
  const fullScreen = useFullScreenHandle();

  const handleTime = () => {
    let currentTime = videoRef.current.currentTime;
  };

  //   could use functional programming to shorten code
  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleFullscreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  useEffect(() => {
    if (isPaused) videoRef.current.pause();
    else videoRef.current.play();
  }, [isPaused]);

  useEffect(() => {
    if (isFullScreen) fullScreen.enter();
    else fullScreen.exit();
  }, [isFullScreen]);

  return (
    <FullScreen className={styles.fullScreen} handle={fullScreen}>
      <div className={styles.splitVideo}>
        {/* Muted for testing, sound is driving me nuts */}
        {/* Change it back later */}
        <SplitVideoModal question={sampleQuestion} isVisible={isModal}>
          <video
            ref={videoRef}
            width="100%"
            height="100%"
            onClick={handlePause}
            onDoubleClick={handleFullscreen}
            onTimeUpdate={handleTime}
            muted
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>
        </SplitVideoModal>

        {/* Controls */}
        <div className={styles.splitVideo__controls}>
          <SplitVideoButton
            FirstIcon={PlayArrowRoundedIcon}
            SecondIcon={PauseRoundedIcon}
            onClick={handlePause}
            currentState={isPaused}
          />
          <SplitVideoButton
            FirstIcon={FullscreenExitRoundedIcon}
            SecondIcon={FullscreenRoundedIcon}
            onClick={handleFullscreen}
            currentState={isFullScreen}
          />
        </div>

        {/* Modal */}
      </div>
    </FullScreen>
  );
}
