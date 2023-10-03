import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import TvShows from "./TvShows";
import { useNavigate } from "react-router-dom";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovieList = useSelector((store) => store.movies.popularMovies);
  const navigate = useNavigate();

  const handleHorrorMovies = () => {
    navigate('/horror')
  };

  const handleActionMovies =()=>{
    navigate('/action')
  }

  if (movieList == null) return;
  if (popularMovieList == null) return;
  return (
    <div className="mt-[340px] bg-gradient-to-b from-black  lg:mt-[600px]">
      <h1 className="text-white text-center font-medium text-lg ">
        What Do You want To Watch Today?
      </h1>
      <div className="flex flex-row mt-2 mb-2 justify-evenly w-full">
        <button
          onClick={handleHorrorMovies}
          className="text-white bg-red-500 w-14 rounded"
        >
          Horror
        </button>
        <button  onClick={handleActionMovies} className="text-white bg-red-500 w-14 rounded">Action</button>
        <button className="text-white bg-red-500 w-20 rounded">Romantic</button>
      </div>
      <MovieList title={"Now Playing Movies"} movieList={movieList} />
      <MovieList title={"Popular Movies"} movieList={popularMovieList} />
      <TvShows />
    </div>
  );
};

export default SecondaryContainer;
