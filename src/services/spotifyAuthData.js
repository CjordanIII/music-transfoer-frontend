
import axiosInstance from '../hooks/axiosInstance';


const spotifyAuthData = async () => {
  
    try{
      // gets playlist
      //TODO change route name later
      const res = await axiosInstance.get("/api/auth");
      const data = res.data;
      return data;
    }catch(e){
        console.log(e);
    }
    
}

export default spotifyAuthData;