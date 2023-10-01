import React from "react";
import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";

const TvShows = () => {
  const tvList = useSelector((store) => store.tvShows.tvShows);
  console.log(tvList);
  if (tvList == null) return;

  return (
    <>
    <h1 className="text-2xl font-bold shadow">TV Shows</h1>
    <div className="flex   overflow-x-scroll">
      {tvList && tvList.length > 0 && (
        <>
          
          {tvList.map((show) => {
            const { id, poster_path } = show;
            return (
              <div className="w-40" key={id}>
                <MovieContainer id={id} poster_path={poster_path} />
              </div>
            );
          })}
        </>
      )}
    </div>
    </>
  );
};

export default TvShows;
