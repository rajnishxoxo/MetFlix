import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Store/Slices/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const moviesDetail = await data.json();
    
    dispatch(addNowPlayingMovies(moviesDetail.results))
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default useNowPlayingMovies;
