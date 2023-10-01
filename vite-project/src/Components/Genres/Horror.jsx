import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";
import { IMAGE_PATH, horrorPageBackGroundImage } from "../../Utils/Contant";
import { useNavigate } from "react-router-dom";

const Horror = () => {
  const horrorMovieList = useSelector((state) => state.movies.horrorMovie);

  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState([]);

  const handleBackToHome = () => {
    navigate('/home')
  };

  useEffect(() => {
    setMoviesList(horrorMovieList);
  }, []);

  if (moviesList == null) return;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold mb-4 lg:text-center lg:text-6xl text-red-600 shadow-lg tracking-wide">
            Horror Movies
          </h1>

          <button
            onClick={handleBackToHome}
            className="text-xl mb-1 rounded bg-red-600 w-auto"
          >
            Go back
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 bg-gradient-to-t from-black  md:grid-cols-4 lg:grid-cols-2 lg:ml-[400px] lg:w-[400px] gap-4">
          {moviesList.map((movie) => (
            <div className="w-full " key={movie.id}>
              <img
                src={IMAGE_PATH + movie.poster_path}
                alt={movie.title}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Horror;
