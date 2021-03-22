import axios from "axios";
const KEY = 'AIzaSyBFb69pkH1Ill72700iCJCziAajjJGeZNg';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults: 10,
        key: KEY,
    }
});