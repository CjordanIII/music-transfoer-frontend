import { useForm } from "react-hook-form";

const EditMusicComponent = ({ props }) => {
  const { playlistName, songsOnPlaylist } = props.playlist;
  const form = useForm();
  // register captures data takes in dynamicly"name[{name}]" staticly "names"
  const { register, handleSubmit } = form;

  const combinedData = songsOnPlaylist.songs.map((song, index) => ({
    song,
    artists: songsOnPlaylist.artist[index].map((data) => data.name),
  }));

  function getItSorted(data) {
    
    const songsEntries = Object.entries(data);
try{
    const filted = songsEntries.filter(([key, value]) => {
      if (value !== "") {
        return [key, value];
      }
    });
    const filtedMore = filted.filter(([key,value])=>{
      console.log(value.length);
      if(value.length>0){
        return [key,value]
      }
    })
    const objectAgain = Object.fromEntries(filtedMore)
    return objectAgain
}catch(e){
  console.log(e)
}

    
  }

  const onSubmit = (data) => {
    // Handle form submission logic here
    
    try{
      const songData = getItSorted(data.songs);
       console.log(songData)
    }catch(e){
      console.log(e)
    }
   


  };

  return (
    // handle submit built in function (method ig) takes my funtion for logic
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Edit Playlist Name */}
      <label
        htmlFor="Playlist-name"
        className="block text-lg font-medium text-gray-700"
      >
        Edit playlist name
      </label>
      <input
        type="text"
        placeholder={playlistName}
        {...register("playlistName")}
        className="mt-2 w-full rounded-md py-2 px-2 border-gray-200 shadow-sm sm:text-sm"
      />

      {/* Edit Songs and Artists */}
      {combinedData.map(({ song, artists }) => (
        <div className="flex" key={song}>
          {/* Edit Song */}
          <label
            htmlFor={song}
            className="block text-lg font-medium text-gray-700"
          >
            Edit song
          </label>
          <input
            type="text"
            name={`songs[${song}]`}
            {...register(`songs[${song}]`)}
            placeholder={song}
            className="w-full rounded-md py-1 h-10 px-1 border-gray-200 shadow-sm sm:text-sm"
          />

          {/* Edit Artists */}
          {artists.map((artist, artistIndex) => (
            <div key={artist}>
              <label
                htmlFor={artist}
                className="block text-lg font-medium text-gray-700"
              >
                Edit Artist
              </label>
              <input
                type="text"
                name={`artists[${song}][${artistIndex}]`}
                {...register(`artists[${song}][${artistIndex}]`)}
                placeholder={artist}
                className="mt-2 w-full rounded-md h-10 py-2 px-2 border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
          ))}
        </div>
      ))}

      {/* Submit Button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit Changes
      </button>
    </form>
  );
};

export default EditMusicComponent;
