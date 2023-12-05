import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from '../slices/spotify';

export default configureStore({
  reducer: { spotify: spotifyReducer },
});
