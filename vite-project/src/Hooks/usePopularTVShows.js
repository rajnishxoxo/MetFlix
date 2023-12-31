import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";
import { useDispatch } from "react-redux";
import { addTvShows } from "../Store/Slices/tvShowsSlice";

const usePopularTvShows = () => {
  const dispatch = useDispatch();

  const fetchTVShows = async () => {
    const tvshowDetail = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const tvShows = await tvshowDetail.json();

    dispatch(addTvShows(tvShows.results));
  };
  useEffect(() => {
    fetchTVShows();
  }, []);
};

export default usePopularTvShows;
