import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Store/Slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const getDetails = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const movieDetails = await getDetails.json();
 
    dispatch(addPopularMovies(movieDetails.results))
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default usePopularMovies;
