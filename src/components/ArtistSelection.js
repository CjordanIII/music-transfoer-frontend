import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import SpoitfyIcon from '../icons/SpoitfyIcon';

const ArtistSelection = () => {
  const spotifyData = useSelector((state) => state.spotify.value.payload);

  return (
    <>
      {" "}
      {spotifyData.map((data, i) => (
        <Link
          key={i}
          to={`/select/songs/${data.playlist.playlistName.split(" ").join("")}`}
          className="p-4 md:w-1/3 scale-90"
        >
          <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 mr-1 inline-flex items-center justify-center rounded-full bg-gray-900 text-white flex-shrink-0">
                <span className="scale-125">
                  {/* Assuming this is your custom icon component */}
                  <SpoitfyIcon />
                </span>
              </div>
              <h2 className="text-gray-900 text-sm title-font font-medium">
                {data.playlist.playlistName}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ArtistSelection;