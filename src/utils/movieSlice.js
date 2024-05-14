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
        addPopularMovies:(state, actions)=>{
            state.popularMovies = actions.payload
                    },
        addTrailerVideos :(state, actions) =>{
state.trailerVideos = actions.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideos,addPopularMovies}= movieSlice.actions

export default movieSlice.reducer