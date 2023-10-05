import React from "react";

import { IMAGE_PATH } from "../Utils/Contant";

const TVPage = ({ poster_path }) => {
  console.log(poster_path)
  return (
    <div className="w-36 m-1">
      <img src={IMAGE_PATH+poster_path} />
    </div>
  );
};

export default TVPage;
