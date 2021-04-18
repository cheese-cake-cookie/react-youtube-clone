import { useEffect, useState } from "react";
import VideoItem from "../video-item/videoItem";

function VideoList(props) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      const fetchData = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&key=AIzaSyBFZj-aYdpJJaUXvva_YKpoEDR91GVawzU"
      )
        .then((res) => res.json())
        .then((res) => res.items);

      setVideoList(fetchData);
    };

    getVideoList();
  }, []);

  return (
    <ul>
      {videoList.map((item) => (
        <VideoItem key={item.id} item={item.snippet} />
      ))}
    </ul>
  );
}

export default VideoList;
