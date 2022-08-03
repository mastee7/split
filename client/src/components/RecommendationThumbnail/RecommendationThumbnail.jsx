import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecommendationThumbnail.module.css";

export default function RecommendationThumbnail({ title, url, setUrlChanged }) {
  // Some error handling that probably won't be needed
  return (
    <Link to={"/watch?v=" + url} onClick={(event) => setUrlChanged(true)}>
      <div className={styles.videoThumbnail}>
        <img
          className={styles.image}
          src="https://i.redd.it/fxuxmdraj0941.jpg"
          alt=""
        />

        <span className={styles.belowImage}>
          <div className={styles.description}>
            <div className={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim
              similique non quae nobis? Quos vel suscipit pariatur iste culpa,
              soluta quia eius totam debitis excepturi maxime exercitationem
              sequi repellat?
            </div>
            <div className={styles.details}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              quisquam porro commodi suscipit voluptas modi tempora voluptates
              doloribus accusamus exercitationem reprehenderit, ea nam
              temporibus ab velit dolorem qui dolores consectetur.
            </div>
            <div className={styles.details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates fugiat asperiores reprehenderit debitis minima est
              delectus velit corporis illum nemo amet laudantium assumenda esse
              ipsum, pariatur eligendi maxime, eos animi!
            </div>
            <div className={styles.details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              doloremque commodi ab, vero id architecto ullam nihil dignissimos
              suscipit impedit, maxime eaque quod modi. Tenetur culpa cumque quo
              odit libero?
            </div>
          </div>
        </span>
      </div>
    </Link>
  );
}
