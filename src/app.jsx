import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';

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
  const [searchKeyword, setSearchKeyword] = useState('');
  const apiURL = "https://www.googleapis.com/youtube/v3/search";
  
  console.log(process.env.API_KEY);
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
      <VideoList videoList={videoList}></VideoList>
    </>
  );
}

export default App;
