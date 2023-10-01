import React from "react";
import MovieContainer from "./MovieContainer";
import { Link } from "react-router-dom";

const MovieList = ({ title, movieList }) => {
 
  return (
    <>
      <h1 className="text-2xl font-bold shadow ">{title}</h1>
      <div className="flex   overflow-x-scroll">
        {movieList.map((movie) => {
          const { id, poster_path } = movie;

          return (
            <div className="w-40">
              <Link to={`/moviePage/${id}`} key={id}>
                <MovieContainer key={id} id={id} poster_path={poster_path} />
              </Link>
            </div>
          );
        })}
      </div>
      
    </>
  );
};

export default MovieList;
