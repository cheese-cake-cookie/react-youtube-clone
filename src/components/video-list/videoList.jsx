import VideoItem from "../video-item/videoItem";
import styles from "./videoList.module.css";

function VideoList({videoList, selectVideo}) {
  return (
    <ul className={styles.video__list}>
      {videoList.map((item) => (
        <VideoItem key={item.etag} id={item.id} item={item.snippet} selectVideo={selectVideo} />
      ))}
    </ul>
  );
}

export default VideoList;
