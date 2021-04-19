import styles from "./videoItem.module.css";

function VideoItem(props) {
  const { item } = props;
  const {
    title: videoTitle,
    channelTitle,
    thumbnails: {
      high: { url: videoImage },
    },
    publishedAt,
  } = item;

  return (
    <li className={styles.video__item}>
      <img className={styles.video__image} src={videoImage} alt="" />
      <h1 className={styles.video__title}>{videoTitle}</h1>
      <h2 className={styles.channel__title}>{channelTitle}</h2>
      <div className={styles.video__description}>
        <small className="views">조회수</small>
        <small className="published-at">{publishedAt}</small>
      </div>
    </li>
  );
}

export default VideoItem;
