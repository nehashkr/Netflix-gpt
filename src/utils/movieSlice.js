import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideos:null
    },
    reducers:{
        addNowPlayingMovies:(state, actions)=>{
state.nowPlayingMovies = actions.payload
        },
        addTrailerVideos :(state, actions) =>{
state.trailerVideos = actions.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideos}= movieSlice.actions

export default movieSlice.reducer