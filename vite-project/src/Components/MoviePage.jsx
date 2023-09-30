import React, { useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetail = async () => {
    const movieTextDetails = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_Option
    );

    const movieDetail = await movieTextDetails.json();
console.log(movieDetail);
  };

  getMovieDetail();

  return (
    <div className="bg-red-800">
      <h1>{id}</h1>
    </div>
  );
};

export default MoviePage;
