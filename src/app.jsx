import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';

function App() {
  const [videoList, setVideoList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const apiURL = "https://www.googleapis.com/youtube/v3/search";
  
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchKeyword(e.target.value);
    }
  };

  useEffect(() => {
      function getOptions() {
        return {
          part: "id,snippet",
          regionCode: "KR",
          key: "AIzaSyBFZj-aYdpJJaUXvva_YKpoEDR91GVawzU",
          maxResults: 20,
          q: searchKeyword,
        };
      };

      async function getVideoList() {
        const options = getOptions();
        const params = Object.keys(options).map(key => `${key}=${options[key]}`).join('&');
        const fetchData = await fetch(`${apiURL}?${params}`).then((res) => res.json()).then((res) => res.items); 

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
