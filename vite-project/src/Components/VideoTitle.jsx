import React from "react";

const VideoTitle = ({ title, overview }) => {

  return (
    <div className="bg-gradient-to-t from-black">
    <div className="pt-[48%] lg:mt-[100px]  px-5 absolute aspect-video bg-gradient-to-b from-black w-screen lg:pt-[20%]  lg:px-24 ">
      <div>
        <h1 className="text-2xl mx-2 mb-2 text-white lg:text-7xl">{title}</h1>
        <p className="text-sm mx-2 text-white lg:text-3xl lg:font-normal">{overview}</p>
      </div>
    </div>
    </div>
  );
};

export default VideoTitle;
