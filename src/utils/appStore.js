import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import  trailerVideosReducer from "./movieSlice";
import  addPopularMoviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    trailerVideos:trailerVideosReducer,
    popularMovies:addPopularMoviesReducer
  },
});

export default appStore;
