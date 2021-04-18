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
    <li className="video__item">
      <img className="video__image" src={videoImage} alt="" />
      <div className="channel__image"></div>
      <h1 className="video__title">{videoTitle}</h1>
      <h2 className="channel__title">{channelTitle}</h2>
      <div className="video__description">
        <small className="views"></small>
        <small className="published-at">{publishedAt}</small>
      </div>
    </li>
  );
}

export default VideoItem;
