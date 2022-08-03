import RecommendationThumbnail from "../RecommendationThumbnail/RecommendationThumbnail";
import styles from "./Recommendations.module.css";

export default function Recommendations() {
  return (
    <div className={styles.recommendations}>
      <RecommendationThumbnail />
      <RecommendationThumbnail />
      <RecommendationThumbnail />
    </div>
  );
}
