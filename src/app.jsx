import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';

function App() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const getVideoList = async () => {
      const fetchData = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&key=AIzaSyBFZj-aYdpJJaUXvva_YKpoEDR91GVawzU&maxResults=20"
      )
        .then((res) => res.json())
        .then((res) => res.items);

      setVideoList(fetchData);
    };

    getVideoList();
  }, []);

  return (
    <>
      <Header></Header>
      <VideoList videoList={videoList}></VideoList>
    </>
  );
}

export default App;
