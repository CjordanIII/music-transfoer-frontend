const EditMusicComponent = ({ props }) => {
  // Destructure the playlist prop
  const { playlistName, songsOnPlaylist } = props.playlist;

  // Combine songs and artists into a single array
  const combinedData = songsOnPlaylist.songs.map((song, index) => ({
    song,
    artist: songsOnPlaylist.artist[index].map((data) => data.name),
  }));

  return (
    <form>
      <>
        <label
          htmlFor="Playlist name"
          className="block text-lg font-medium text-gray-700"
        >
          {" "}
          Edit playlist name{" "}
        </label>

        <input
          type="text"
          name="Playlist name"
          placeholder={playlistName}
          className="mt-2 w-full rounded-md py-2 px-2 border-gray-200 shadow-sm sm:text-sm"
        />
      </>

      {/* Songs and Artists */}
      <>
        <>
          {combinedData.map(({ song, artist }) => (
            <div className="flex" key={song}>
              <label
                htmlFor={song}
                className="block text-lg font-medium text-gray-700"
              >
                {" "}
                Edit song{" "}
              </label>

              <input
                type="text"
                name={song}
                placeholder={song}
                className="mt-2 w-full rounded-md py-2 px-2 border-gray-200 shadow-sm sm:text-sm"
              />

              {artist.map((a) => (
                <div key={a}>
                  <label
                    htmlFor={a}
                    className="block text-lg font-medium text-gray-700"
                  >
                    {" "}
                    Edit Artist{" "}
                  </label>

                  <input
                    type="text"
                    name={a}
                    placeholder={a}
                    className="mt-2 w-full rounded-md py-2 px-2 border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>
              ))}
            </div>
          ))}
        </>
      </>
    </form>
  );
};

export default EditMusicComponent;
