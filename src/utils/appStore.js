import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import  trailerVideosReducer from "./movieSlice";
import  addPopularMoviesReducer from "./movieSlice";
import gptReducer from "./GptSlice"
import configReducer from './configSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    trailerVideos:trailerVideosReducer,
    popularMovies:addPopularMoviesReducer,
    gpt: gptReducer,
    config: configReducer
  },
});

export default appStore;
