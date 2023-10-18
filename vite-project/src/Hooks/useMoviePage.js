import { useDispatch } from "react-redux";
import {
  addMovieTextDetail,
  addMovieVideoDetails,
} from "../Store/Slices/moviePageSlice";
import { API_OPTIONS } from "../Utils/Contant";
import { useEffect } from "react";

const useMoviePage = (id) => {
  const dispatch = useDispatch();

  const getMovieDetail = async () => {
    const textdata = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTIONS
    );

    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );

    const movieInfo = await textdata.json();
    const movieVideoData = await videoData.json();

    console.log(movieInfo)

    const movieVideo = movieVideoData.results;

    const movieTrailer = movieVideo.filter((movie) => movie.type == "Trailer");
    const mainTrailer = movieTrailer[0];
    
    dispatch(addMovieVideoDetails(mainTrailer));
    const { original_title, overview, poster_path } = movieInfo;
    dispatch(addMovieTextDetail({ original_title, overview, poster_path }));
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
};

export default useMoviePage;
