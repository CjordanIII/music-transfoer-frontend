
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SpoitfyIcon from '../icons/SpoitfyIcon';
import { addSpotifyData } from '../slices/spotify';
import handleSpotify from '../utils/handleSpotify';
import ArtistSelection from './ArtistSelection';

const Spotify = () => {
const dispatch = useDispatch()

const [checkState,setCheckState] = useState({})
const [boolean,setBoolean] = useState(false)
 const dataCheck = useSelector((state) => state.spotify.value);
// takes data from state useEffect to prevent to many re-render errors
useEffect(()=>{
 
  setCheckState(dataCheck)
    return () => {
      // Code to run on component unmount or when dataCheck changes
      console.log("Cleanup logic executed");
      // Add your cleanup logic here
    

    };
},[dataCheck])

//*Show artist T/F
function showArtist() {
  setBoolean((prevBoolean) => !prevBoolean);
}


 async function startHandleSpotify(){
    
    const spotifyData = await handleSpotify()
    
    try{
      dispatch(addSpotifyData({ type: "spotifyData", payload: spotifyData }));
    }catch(e){
      console.log(e)
    }
    
  }
  return (
    <>
      <button onClick={startHandleSpotify} className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 mr-1 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
              <span className="scale-125">
                <SpoitfyIcon />
              </span>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Spotify
            </h2>
          </div>
        </div>
      </button>

      {/* !! styling for all buttons */}
      {/* Show buttons if there is data in spotify state */}

      {
        boolean? (<ArtistSelection/>):("")
      }



      {Object.keys(checkState).length > 0 ? (
        <button
          onClick={()=>showArtist()}
          className="bg-gray-500 hover:bg-gray-700 text-white text-center py-2 px-4 rounded"
        >
          Show/Hide artist
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default Spotify