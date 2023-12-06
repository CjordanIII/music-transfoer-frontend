import spotifyAuthData from "../services/spotifyAuthData";
import organizeSpotifyApi from "./organizeSpotifyApi";



const handleSpotify = async()=>{
    
    const spotifyPlaylist = await spotifyAuthData();
    const spotifyData = await organizeSpotifyApi(spotifyPlaylist);
    return spotifyData
    
    
}

export default handleSpotify