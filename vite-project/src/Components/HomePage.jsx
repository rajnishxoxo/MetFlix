import React, { useEffect, useState } from "react";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUserInfo, removeUser } from "../Store/Slices/userSlice";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularTvShows from "../Hooks/usePopularTVShows";
import usePopularMovies from "../Hooks/usePopularMovies";
import horrorMovie from "../Hooks/horrorMovie";
import GptSearchComp from "./GptSearchComp ";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUserInfo({ email: email, uid: uid }));
        navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {});
  };

  useNowPlayingMovies();
  usePopularTvShows();
  usePopularMovies();
  horrorMovie();

  const [showGPT, setShowGPT] = useState(false);

  const handleShowGPT = () => {
    if (showGPT === false) {
      setShowGPT(true);
  
    } else {
      setShowGPT(false);
    }
  };

  return (
    <>
      <div className="flex flex-row items-center mt-5 bg-gradient-to-b from-black  justify-between w-full lg:w-full lg:ml-10 lg:mt-0">
        <img
          className="w-28 lg:w-36"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />

        <div className="flex flex-row justify-between items-center lg:w-1/2 lg:justify-evenly">
          <button
            onClick={handleShowGPT}
            className="bg-green-800 w-28 lg:w-36 h-10  rounded text-center mr-2 hover:bg-green-600 text-white"
          >
            GPT-Search
          </button>
          <button
            onClick={handleSignOut}
            className="bg-red-700 w-20 lg:w-36 h-10  rounded text-center mr-2 hover:bg-red-600 text-white font-bold"
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="flex flex-col overflow-hidden justify-between">
        {showGPT ? (
          <>
            <GptSearchComp />
          </>
        ) : (
          <div>
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
