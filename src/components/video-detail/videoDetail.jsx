import styles from "./videoDetail.module.css";

function VideoDetail({video}) {
  return (
  <div className={styles.video__detail}>
    <img className={styles.video__thumbnail} src={video.thumbnails.high.url} alt={video.title} />
    <section className={styles.video__info}>
      <h1 className={styles.video__title}>{video.title}</h1>
      <h2 className={styles.channel__title}>{video.channelTitle}</h2>
      <hr/>
      <span>게시 날짜: {video.publishedAt}</span>
      <p className={styles.video__description}>{video.description}</p>
    </section>
  </div>);
}

export default VideoDetail;
