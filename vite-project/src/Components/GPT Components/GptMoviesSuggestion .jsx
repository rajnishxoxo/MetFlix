import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMAGE_PATH } from "../../Utils/Contant";


const GptMoviesSuggestion = () => {
  const movieStore = useSelector((state) => state.movies.gptMovies);
  

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 mx-auto max-w-screen-xl">
        {movieStore &&
          movieStore.map((data) => {
            const mainMovie = data[0];
            const { id, original_title, poster_path } = mainMovie;

            return (
              <div key={id} className="relative w-full bg-white rounded-lg overflow-hidden shadow-md">
                <Link to={`/MoviePage/${id}`} key={id} className="block">
                  <img
                    src={IMAGE_PATH + poster_path}
                    alt={original_title}
                    className="w-full h-auto"
                  />
                </Link>
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900">{original_title}</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;