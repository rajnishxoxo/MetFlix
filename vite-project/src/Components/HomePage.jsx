import React from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";


const HomePage = () => {
  useNowPlayingMovies();
  return (
    <div className="flex flex-row items-center mt-5  justify-between w-full lg:w-full lg:ml-10 lg:mt-0">
      <img
        className="w-28 lg:w-36"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <div className="flex flex-row justify-between items-center lg:w-1/2 lg:justify-evenly">
      <button className="bg-green-800 w-28 lg:w-36 h-10  rounded text-center mr-2 hover:bg-green-600 text-white">GPT-Search</button>
      <button className="bg-red-700 w-20 lg:w-36 h-10  rounded text-center mr-2 hover:bg-red-600 text-white font-bold">
        Sign out
      </button>
      </div>
    </div>
  );
};

export default HomePage;
