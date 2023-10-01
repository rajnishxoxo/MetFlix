import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";

const usePopularMovies = () => {
  const fetchData = async () => {
    const getDetails = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const movieDetails = await getDetails.json();
    console.log(movieDetails);
  };

  useEffect(() => {
    fetchData();
  }, []);
};


export default usePopularMovies;

