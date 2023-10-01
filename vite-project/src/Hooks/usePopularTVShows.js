import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";

const usePopularTvShows = () => {
  const fetchTVShows = async () => {
    const details = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const tvShows = await details.json();
    console.log(tvShows.results);
  };
  useEffect(() => {
    fetchTVShows();
  }, []);
};

export default usePopularTvShows;
