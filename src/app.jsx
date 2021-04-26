import {useState, useEffect} from 'react';
import Header from './components/header/header';
import VideoList from './components/video-list/videoList';

function App() {
  const [videoList, setVideoList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const apiURL = "https://www.googleapis.com/youtube/v3/search";
  let options = {
    part: "id,snippet",
    regionCode: "KR",
    key: "AIzaSyBFZj-aYdpJJaUXvva_YKpoEDR91GVawzU",
    maxResults: 20,
    q: searchKeyword,
  };

  const getVideoList = async () => {
    const params = Object.keys(options).map(key => `${key}=${options[key]}`).join('&');
    const fetchData = await fetch(`${apiURL}?${params}`)
      .then((res) => res.json())
      .then((res) => res.items);

      console.log(fetchData)
    setVideoList(fetchData);
  };
  
  
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setSearchKeyword(e.target.value);
      getVideoList();
    }
  };

  useEffect(() => {
    getVideoList();
  }, []);

  return (
    <>
      <Header handleSearch={handleSearch}></Header>
      <VideoList videoList={videoList}></VideoList>
    </>
  );
}

export default App;
