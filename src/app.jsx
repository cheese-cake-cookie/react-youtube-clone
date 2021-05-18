import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';
import VideoDetail from './components/video-detail/videoDetail';

function getSearchParams(searchKeyword) {
  const options = {
    part: "id,snippet",
    chart: 'mostPopular',
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
  const apiURL = "https://www.googleapis.com/youtube/v3/videos";
  const searchURL = "https://www.googleapis.com/youtube/v3/search";
  
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
      const fetchData = await fetch(`${apiURL}?${getSearchParams()}`).then((res) => res.json()).then((res) => res.items); 
      setVideoList(fetchData);
    }

    getVideoList();
  }, []);

  useEffect(() => {
    async function getVideoList() {
      const fetchData = await fetch(`${searchURL}?${getSearchParams(searchKeyword)}`).then((res) => res.json()).then((res) => res.items); 
      setVideoList(fetchData);
    }

    searchKeyword && getVideoList();
  }, [searchKeyword]);

  return (
    <>
      <Header handleSearch={handleSearch} selectVideo={selectVideo}></Header>
      { selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail> }
      <VideoList videoList={videoList} selectVideo={selectVideo}></VideoList>
    </>
  );
}

export default App;
