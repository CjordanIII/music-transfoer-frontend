const organizeSpotifyApi =async (data) => {
   let songArr = [];
 
for (let i = 0; i < data.playlistName.length; i++) {
  let spotifyData = {
    playlist: {
      playlistName: data.playlistName[i],
      songsOnPlaylist: {
        songs: data.songName[i],
        artist: data.artist[i],
      },
    },
  };
  songArr.push(spotifyData);
}

return songArr;
}

export default organizeSpotifyApi;
