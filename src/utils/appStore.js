import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import  trailerVideosReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    trailerVideos:trailerVideosReducer
  },
});

export default appStore;
