import React, { useRef, useState } from "react";
import openai from "../../Utils/openAI";

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utils/Contant";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [showWarning, setshowWarning] = useState(true);

  const searchBarTextContent = useRef();

  const fetchMovies = async (movie) => {
    const details = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const movieDetail = await details.json();
    return movieDetail.results;
  };

  const handleInputChange = async () => {
    if (showWarning === true) {
      setshowWarning(false);
    } else {
      setshowWarning(true);
    }
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchBarTextContent.current.value +
      ".only give me names of 5 good rated  movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. Just 5 Movies no more than that";

    const gptresults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (gptresults.choices == null) return;

    const gptSuggestedMovieList =
      gptresults.choices[0]?.message?.content.split(",");

    const arrayOfPromise = gptSuggestedMovieList.map((movie) =>
      fetchMovies(movie)
    );

    const tmdbResult = await Promise.all(arrayOfPromise);

    console.log(tmdbResult);
  };

  return (
    <div className="mt-40 text-center bg-cover bg-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-1/2 mx-auto flex items-center"
      >
        <input
          className="flex-grow px-4 py-2 font-bold border border-black rounded-l-md"
          type="text"
          placeholder="What would you like to watch today?"
          ref={searchBarTextContent}
        />
        <button
          onClick={handleInputChange}
          className="ml-1 bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-r-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
