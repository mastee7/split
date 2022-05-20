import React from "react";

//MaterialUI icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import VideoLibraryRoundedIcon from "@mui/icons-material/VideoLibraryRounded";

import SidebarIcon from "../SidebarIcon/SidebarIcon";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarIcon Icon={HomeRoundedIcon} title="Home" path="/" />
      <SidebarIcon Icon={ExploreRoundedIcon} title="Explore" path="/" />
      <SidebarIcon Icon={VideoLibraryRoundedIcon} title="Library" path="/" />
    </div>
  );
}
