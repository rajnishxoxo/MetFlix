import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import useMoviePage from "../Hooks/useMoviePage";
import { useSelector } from "react-redux";
import { IMAGE_PATH } from "../Utils/Contant";

const MoviePage = () => {

  const { id } = useParams();

  useMoviePage(id);

  const movieTextDetail = useSelector(
    (state) => state.moviePage.movieTextDetail
  );
  const movieVideoDetail = useSelector(
    (state) => state.moviePage.movieVideoDetail
  );

  console.log(movieVideoDetail)

  if (movieTextDetail === null || movieVideoDetail === null) return;

  const { poster_path, original_title, overview } = movieTextDetail;
  const { key } = movieVideoDetail;

  if(key===null) return;

  return (
    <div className="lg:absolute lg:-z-10 lg:-mt-20">
      <div className="w-screen absolute -z-20  ">
        <iframe
          className=" w-[400px] mt-5  lg:w-screen lg:h-full aspect-video lg:aspect-video rounded"
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
      <div>
        <div className="bg-gradient-to-t from-black">
          <div className="pt-[40%] lg:mt-[100px]  px-5 absolute aspect-video bg-gradient-to-b from-black w-screen lg:pt-[20%]  lg:px-24 ">
            <div>
              <h1 className="text-2xl mx-2 mb-2 text-white lg:text-7xl">
                {original_title}
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
                {original_title}
              </h1>
              <p className="text-sm mx-2 text-white lg:text-3xl lg:font-normal">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        <div className="md:hidden ">
          <img
            className=" w-[100%] border-[1px] border-brand-beige mt-8 mx-auto rounded-xl"
            src={IMAGE_PATH + poster_path}
            alt="movie poster"
          />
        </div>
      }
    </div>
  );
};

export default MoviePage;
