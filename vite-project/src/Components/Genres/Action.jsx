import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addActionMovies } from "../../Store/Slices/movieSlice";
import { useNavigate } from "react-router-dom";
import { IMAGE_PATH } from "../../Utils/Contant";

const Action = () => {
  const dispatch = useDispatch();
  const getMovie = useSelector((state) => state.movies);
  const navigate = useNavigate();

  useEffect(() => {
    const { nowPlayingMovies, popularMovies } = getMovie;

    if (nowPlayingMovies === null || popularMovies === null) return;

    const actionMovieListOne = nowPlayingMovies.filter((movie) =>
      movie.genre_ids.includes(28)
    );

    const actionMovieListTwo = popularMovies.filter((movie) =>
      movie.genre_ids.includes(28)
    );

    dispatch(addActionMovies(actionMovieListOne));
    dispatch(addActionMovies(actionMovieListTwo));
  }, []);

  const actionMovies = useSelector((state) => state.movies.actionMovie);

  const handleBackToHome = () => {
    navigate("/home");
  };

  if(actionMovies===null) return;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-semibold mb-4 lg:text-center lg:text-6xl text-red-600 shadow-lg tracking-wide">
            Action Movies
          </h1>

          <button
            onClick={handleBackToHome}
            className="text-xl mb-1 rounded bg-red-600 w-auto"
          >
            Go back
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 bg-gradient-to-t from-black  md:grid-cols-4 lg:grid-cols-2 lg:ml-[400px] lg:w-[400px] gap-4">
          {actionMovies.map((movie) => (
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

export default Action;
