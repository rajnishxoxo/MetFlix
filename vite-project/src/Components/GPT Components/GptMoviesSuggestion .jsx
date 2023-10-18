import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMAGE_PATH, netflixBackGround } from "../../Utils/Contant";

const GptMoviesSuggestion = () => {
  const movieStore = useSelector((state) => state.movies.gptMovies);

  return (
    <div className=" p-6 absolute">
      
      <div className="grid grid-cols-3 gap-3  mt-10 mx-auto max-w-screen-xl">
       
        {movieStore &&
          movieStore.map((data) => {
            const mainMovie = data[0];
            const { id, original_title, poster_path } = mainMovie;

            return (
              <div
                key={id}
                className="relative lg:w-[400px] h-auto  bg-white rounded-lg overflow-hidden shadow-md"
              >
                <Link to={`/MoviePage/${id}`} key={id} className="block">
                  <img
                    src={IMAGE_PATH + poster_path}
                    alt={original_title}
                    className="w-full object-cover   h-[100px]"
                  />
                </Link>
                <div className="p-4">
                  <h2 className="text-sm font-bold text-gray-900">
                    {original_title}
                  </h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
