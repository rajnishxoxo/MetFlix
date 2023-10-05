import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_OPTIONS, IMAGE_PATH } from "../Utils/Contant";
import { useDispatch } from "react-redux";
import { addTvShowsDetails } from "../Store/Slices/tvShowsSlice";
import { useSelector } from "react-redux";

const TvSeries = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(id);

  const fetchDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/" + id + "?language=en-US",
      API_OPTIONS
    );

    const getDetails = await data.json();

    console.log(getDetails);

    const { overview, poster_path, original_name } = getDetails;
    dispatch(addTvShowsDetails({ overview, poster_path, original_name }));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const tvDetails = useSelector((state) => state.tvShows.singleTVShowDetail);
  if (tvDetails === null) return;
  const { overview, poster_path, original_name } = tvDetails;

  return (
    <div className="-mt-[100px]">
      <div className="bg-gradient-to-t from-black">
        <div className="pt-[40%] lg:mt-[100px]  px-5 absolute aspect-video bg-gradient-to-b from-black w-screen lg:pt-[20%]  lg:px-24 ">
          <div>
            <h1 className="text-2xl mx-2 mb-2 text-white lg:text-7xl">
              {original_name}
            </h1>
            <p className="text-sm mx-2 text-white lg:text-3xl lg:font-normal">
              {overview}
            </p>
           
           
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-t from-black">
        <div className="pt-[40%] lg:mt-[100px]  px-5 absolute aspect-video bg-gradient-to-b from-black w-screen lg:pt-[20%]  lg:px-24 ">
          <div>
            <h1 className="text-2xl mx-2 mb-2 text-white  lg:text-7xl">
              {original_name}
            </h1>
            <p className="text-sm mx-2 text-white lg:text-3xl lg:font-normal">
              {overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvSeries;
