import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';
import VideoDetail from './components/video-detail/videoDetail';

function getSearchParams(searchKeyword) {
  const options = {
    part: "id,snippet",
    regionCode: "KR",
    key: process.env.REACT_APP_API_KEY,
    maxResults: 20,
    q: searchKeyword,
  };

  return Object.keys(options).map(key => `${key}=${options[key]}`).join('&');
};

function App() {
  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const apiURL = "https://www.googleapis.com/youtube/v3/search";
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchKeyword(e.target.value);
    }
  };

  useEffect(() => {
      async function getVideoList() {
        const fetchData = await fetch(`${apiURL}?${getSearchParams(searchKeyword)}`).then((res) => res.json()).then((res) => res.items); 
        setVideoList(fetchData);
      }

      getVideoList();
  }, [searchKeyword]);

  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      { selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail> }
      <VideoList videoList={videoList} selectVideo={selectVideo}></VideoList>
    </>
  );
}

export default App;
