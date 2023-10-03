import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";
import { useDispatch } from "react-redux";
import { addHorrorMovies } from "../Store/Slices/movieSlice";
import usePopularMovies from "./usePopularMovies";

const horrorMovie = () => {
  const dispatch = useDispatch();
  const fetchMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const getDetails = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const moviesDetail = await data.json();
    const moviesDetailTwo = await getDetails.json();

    const horrorMovieList = moviesDetail.results;
    const horrorMovieListTwo = moviesDetailTwo.results;

    const horrorMovies = horrorMovieList.filter((movie) =>
      movie.genre_ids.includes(27)
    );

    const anotherSectionOfHorror = horrorMovieListTwo.filter((movie) =>
      movie.genre_ids.includes(27)
    );

    dispatch(addHorrorMovies(horrorMovies));
    dispatch(addHorrorMovies(anotherSectionOfHorror));
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
};

export default horrorMovie;
