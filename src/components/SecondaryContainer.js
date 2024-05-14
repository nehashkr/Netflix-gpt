import React from 'react'
import VideoTitle from './VideoTitle'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {

  const movie = useSelector(store => store.movie);
  return (
    movie.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-40 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movie={movie.nowPlayingMovies} />
          <MovieList title={"Trending"} movie={movie.nowPlayingMovies} />
          <MovieList title={"Popular"} movie={movie.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movie.nowPlayingMovies}
          />
          <MovieList title={"Horror"} movies={movie.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer