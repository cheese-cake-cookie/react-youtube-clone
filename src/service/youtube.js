class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptiosn = {
      methods: 'GET',
      redirect: 'follow',
    }
  }

  async mostPopular() {
    const params =  {
      part: "id,snippet",
      chart: 'mostPopular',
      regionCode: "KR",
      key: this.key,
      maxResults: 20,
    };

    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`);
    const result = await response.json();

    return result.items;
  }

  async search(query) {
    const params =  {
      part: "id,snippet",
      chart: 'mostPopular',
      regionCode: "KR",
      key: this.key,
      maxResults: 20,
      q: query,
    };

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${Object.keys(params).map(key => `${key}=${params[key]}`).join('&')}`);
    const result = await response.json();

    return result.items;
  }
}

export default Youtube;