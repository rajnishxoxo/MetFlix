import React, { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Contant";
import useTrailer from "../Hooks/useTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ id }) => {
  useTrailer(id);

  const movieTrailer = useSelector((state) => state.movies.movieTrailer);

  if (movieTrailer == null) return;

  const { key } = movieTrailer;

  return (
    <div className="w-screen absolute -z-20  ">
      <iframe
        className=" w-[400px] mt-5 lg:w-screen lg:h-full aspect-video lg:aspect-video rounded"
        height="315"
        src={
          "https://www.youtube.com/embed/" + key + "?autoplay=1&mute=1&rel=0"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
