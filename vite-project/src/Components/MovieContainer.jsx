import React from "react";
import { IMAGE_PATH } from "../Utils/Contant";
import { Link } from "react-router-dom";

const MovieContainer = ({ id, poster_path }) => {
 
  return (
    <div className="w-36 m-1">
     
        
        <img src={IMAGE_PATH + poster_path} />
     
    </div>
  );
};

export default MovieContainer;
