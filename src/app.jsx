import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';
import VideoDetail from './components/video-detail/videoDetail';

function App({youtube}) {
  console.log(youtube);
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSelectedVideo(null);
      
      youtube
        .search(e.target.value)
        .then(setVideoList);
    }
  };

  useEffect(() => {
    youtube.mostPopular().then(setVideoList);
  }, [youtube]);

  return (
    <>
      <Header handleSearch={handleSearch} selectVideo={selectVideo}></Header>
      { selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail> }
      <VideoList videoList={videoList} selectVideo={selectVideo}></VideoList>
    </>
  );
}

export default App;
