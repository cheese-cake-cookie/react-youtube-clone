import {useState, useEffect, useCallback, useReducer} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';
import VideoDetail from './components/video-detail/videoDetail';

function App({youtube}) {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const search = useCallback(query => {
    setSelectedVideo(null);
    youtube
        .search(query)
        .then(setVideoList);
  }, [youtube]);

  useEffect(() => {
    youtube.mostPopular().then(setVideoList);
  }, [youtube]);

  return (
    <>
      <Header onSearch={search}></Header>
      { selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail> }
      <VideoList videoList={videoList} selectVideo={selectVideo}></VideoList>
    </>
  );
}

export default App;
