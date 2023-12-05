import spotifyAuthData from "../services/spotifyAuthData";
import organizeSpotifyApi from "./organizeSpotifyApi";
const handleSpotify = async()=>{
    
    const spotifyPlaylist = await spotifyAuthData();
    organizeSpotifyApi(spotifyPlaylist);
    
    
}

export default handleSpotify