import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IMAGE_PATH } from "../../Utils/Contant";
import { addRomanticeMovies } from "../../Store/Slices/movieSlice";

const Romance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movieList, setMovieList] = useState([]);

  const getMovie = useSelector((state) => state.movies);

  useEffect(() => {
    const { nowPlayingMovies, popularMovies } = getMovie;
    const movieListOne = nowPlayingMovies.filter((movie) =>
      movie.genre_ids.includes(10749)
    );
    const movieListTwo = popularMovies.filter((movie) =>
      movie.genre_ids.includes(10749)
    );

    const finalList = [...movieListOne, ...movieListTwo];
    
    dispatch(addRomanticeMovies(finalList));
    setMovieList(finalList);
  }, []);

  const handleBackToHome = () => {
    navigate("/home");
  };

  if (movieList === null) return;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold mb-4 lg:text-center lg:text-6xl text-red-600 shadow-lg tracking-wide">
            Romantic Movies
          </h1>

          <button
            onClick={handleBackToHome}
            className="text-xl mb-1 rounded bg-red-600 w-auto"
          >
            Go back
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 bg-gradient-to-t from-black  md:grid-cols-4 lg:grid-cols-2 lg:ml-[400px] lg:w-[400px] gap-4">
          {movieList.map((movie) => (
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

export default Romance;
