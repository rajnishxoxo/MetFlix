import React from "react";
import GptSearchBar from "./GPT Components/GptSearchBar";
import GptMoviesSuggestion from "./GPT Components/GptMoviesSuggestion ";
import { netflixBackGround } from "../Utils/Contant";

const GptSearchComp = () => {
  return (
  
  <>
 
    <div className="">
    <div className=" z-10 w-full absolute">
    <div className="ml-[-100px]">
    <GptSearchBar />
    </div>
   <div>
   <GptMoviesSuggestion/>
   </div>
    </div>
    <div className="relative">
      <div class="relative my-1">
        <img class="object-cover h-screen lg:h-auto " src={netflixBackGround} alt="bg" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent"></div>
      </div>

      </div>
      </div>

      </>
   
       
   
  );
};

export default GptSearchComp;