import { useSelector } from "react-redux";

const EditMusic = () => {
  const spotifyData = useSelector((state) => state.spotify.value.payload);
  console.log(spotifyData);
  return <div>EditMusic</div>;
};

export default EditMusic;
