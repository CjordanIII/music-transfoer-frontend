
import { createSlice } from "@reduxjs/toolkit";

export const spotifyReducer = createSlice({
  name: "spotifySlice",
  initialState: {
    value:{},
  },
  reducers: {
    addSpotifyData: (state,action) => {
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSpotifyData } = spotifyReducer.actions;

export default spotifyReducer.reducer;
