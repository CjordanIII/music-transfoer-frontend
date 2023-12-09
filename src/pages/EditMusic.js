import { useSelector } from "react-redux";
import EditMusicComponet from "../components/EditMusicComponet";
import { preFillFormData } from "../utils/preFillFormData";

const EditMusic = () => {

        const spotifyData = useSelector((state) => state.spotify.value.payload);
  const getPreFilledFormData = preFillFormData(spotifyData);

    console.log(getPreFilledFormData)

  return (
    <div className="flex  justify-center">
      <div className="mt-32">
        <EditMusicComponet props={getPreFilledFormData} />
      </div>
    </div>
  );
};

export default EditMusic;
