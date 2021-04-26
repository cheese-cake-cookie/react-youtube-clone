import VideoItem from "../video-item/videoItem";
import styles from "./videoList.module.css";

function VideoList({videoList}) {
  return (
    <ul className={styles.video__list}>
      {videoList.map((item) => (
        <VideoItem key={item.id} item={item.snippet} />
      ))}
    </ul>
  );
}

export default VideoList;
