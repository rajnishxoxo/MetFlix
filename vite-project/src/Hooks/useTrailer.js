import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../Store/Slices/movieSlice";

const useTrailer = (id) => {
  const dispatch = useDispatch();
  const fetchData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const movies = await data.json();

    const movieDetail = movies.results;

    const movieTrailer = movieDetail.filter((video) => {
      return video.type == "Trailer";
    });

    const mainTrailer = movieTrailer[0];

    dispatch(addMovieTrailer(mainTrailer));
  };

  useEffect(() => {
    fetchData();
  }, []);
};

export default useTrailer;
