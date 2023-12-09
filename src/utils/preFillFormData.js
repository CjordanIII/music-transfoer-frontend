




const preFillFormData = (spotifyData) => {
  const urlArray = window.location.href.split("/");
  const urlLength = urlArray.length - 1;
  const urlEnd = urlArray[urlLength];
  let matchedData;



  for (let data of spotifyData) {
    if (data.playlist.playlistName.split(" ").join("") === urlEnd) {
         matchedData = data;
        break;
    }

    console.log(matchedData)

  }

  return matchedData

  
};

export { preFillFormData };

