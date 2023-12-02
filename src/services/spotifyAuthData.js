
import axiosInstance from '../hooks/axiosInstance';


const spotifyAuthData = async () => {
  
    try{
        const res = await axiosInstance.get("/api/auth");
        
    }catch(e){
        console.log(e)
    }
    
}

export default spotifyAuthData