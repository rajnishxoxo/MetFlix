import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";

const MainContainer = () => {
  const movie = useSelector((state) => state.movies);

  const { nowPlayingMovies } = movie;

  if (nowPlayingMovies == null) return;

  const mainMovie = nowPlayingMovies[0];

  const { title, overview, id } = mainMovie;

  return (
    <div className="lg:absolute lg:-z-10 lg:-mt-20">
      <VideoBackGround id={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
