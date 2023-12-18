
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
    editSpotifyData:(state,action)=>{
      console.log(action.payload);

      state.value[action.payload.payload[1]] = action.payload.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addSpotifyData ,editSpotifyData} = spotifyReducer.actions;

export default spotifyReducer.reducer;
