import React from "react";
import { useSelector } from "react-redux";
import MovieContainer from "./MovieContainer";
import { Link } from "react-router-dom";
import TVPage from "./TVPage";

const TvShows = () => {
  const tvList = useSelector((store) => store.tvShows.tvShows);

  console.log(tvList)

  if (tvList == null) return;

  return (
    <>
      <h1 className="text-2xl text-white font-bold shadow">TV Shows</h1>
      <div className="flex  overflow-x-scroll">
        <>
          {tvList.map((show) => {
            const { id, poster_path } = show;
            console.log(poster_path)
            
            return (
              <div className="w-40" key={id}>
                <Link to={`/tvPage/${id}`} key={id}>
                  <TVPage poster_path={poster_path}/>
                </Link>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
};

export default TvShows;
