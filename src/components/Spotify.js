import React from 'react';
import SpoitfyIcon from '../icons/SpoitfyIcon';
import handleSpotify from '../utils/handleSpotify';


const Spotify = () => {
  return (
    <button onClick={handleSpotify} className="p-4 md:w-1/3">
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
  );
}

export default Spotify