




const preFillFormData = (spotifyData) => {
  const urlArray = window.location.href.split("/");
  const urlLength = urlArray.length - 1;
  const urlEnd = urlArray[urlLength];
  let matchedData;
  let index;


  for (let data of spotifyData) {
    if (data.playlist.playlistName.split(" ").join("") === urlEnd) {
         matchedData = data;
        index = spotifyData.indexOf(data)
        break;
    }


  }

  return { matchedData, index };

  
};

export { preFillFormData };

