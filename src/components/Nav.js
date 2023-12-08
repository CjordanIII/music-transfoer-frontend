import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import EditMusic from '../pages/EditMusic';
import SelectFromPage from '../pages/SelectFromPage';
import Selecting from './Selecting';



const Nav = () => {
    const spotifyData = useSelector((state) => state.spotify.value.payload);
    const [dataCheck,setDataCheck] = useState(null)
    console.log(spotifyData)
   
  useEffect(()=>{
     setDataCheck(spotifyData);
  },[spotifyData])



  return (
    <Routes>
      <Route path="/" element={<Selecting />} />
      <Route path="/select" element={<SelectFromPage />} />
      <>
        {/* the data */}
        {dataCheck
          ? spotifyData.map((data, i) => (
              <Route
                key={i}
                path={`/select/songs/${data.playlist.playlistName
                  .split(" ")
                  .join("")}`}
                element={<EditMusic />}
              />
            ))
          : ""}
      </>
    </Routes>
  );
}

export default Nav;