import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import TvShows from "./TvShows";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovieList = useSelector((store) => store.movies.popularMovies);

  if (movieList == null) return;
  return (
    <div className="mt-[340px]  lg:mt-[600px]">
      
      <MovieList title={"Now Playing Movies"} movieList={movieList} />
      <MovieList title={"Popular Movies"} movieList={popularMovieList} />
      <TvShows/>
    </div>
  );
};

export default SecondaryContainer;
