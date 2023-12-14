import { useFieldArray, useForm } from "react-hook-form";

const EditMusicComponent = ({ props }) => {
  const { playlistName, songsOnPlaylist } = props.playlist;
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      playlistName,
      songs: songsOnPlaylist.songs.map((song, index) => ({
        name: song,
        artists: songsOnPlaylist.artist[index].map((data) => ({
          name: data.name,
        })),
      })),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "songs",
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="playlistName"
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

      {fields.map((song, songIndex) => (
        <div className="flex" key={songIndex}>
          <label
            htmlFor={`songs[${songIndex}].name`}
            className="block text-lg font-medium text-gray-700"
          >
            Edit song
          </label>
          <input
            type="text"
            {...register(`songs[${songIndex}].name`)}
            placeholder={song.name}
            className="w-full rounded-md py-1 h-10 px-1 border-gray-200 shadow-sm sm:text-sm"
          />

          {song.artists.map((artist, artistIndex) => (
            <div key={artistIndex}>
              <label
                htmlFor={`songs[${songIndex}].artists[${artistIndex}].name`}
                className="block text-lg font-medium text-gray-700"
              >
                Edit Artist
              </label>
              <input
                type="text"
                {...register(
                  `songs[${songIndex}].artists[${artistIndex}].name`
                )}
                placeholder={artist.name}
                className="mt-2 w-full rounded-md h-10 py-2 px-2 border-gray-200 shadow-sm sm:text-sm"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={() => remove(songIndex)}
            className="ml-2 bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ name: "", artists: [] })}
        className="mt-2 bg-green-500 text-white font-bold py-2 px-4 rounded"
      >
        Add Song
      </button>

      <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit Changes
      </button>
    </form>
  );
};

export default EditMusicComponent;
