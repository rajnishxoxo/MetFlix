import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";

const useNowPlayingMovies = () => {
  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const moviesDetail = await data.json();
    console.log(moviesDetail);
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useNowPlayingMovies;
