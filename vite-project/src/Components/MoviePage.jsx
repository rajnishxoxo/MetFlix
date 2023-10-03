import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import useMoviePage from "../Hooks/useMoviePage";
import { useSelector } from "react-redux";

const MoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useMoviePage(id);

  const movieTextDetail = useSelector(
    (state) => state.moviePage.movieTextDetail
  );
  const movieVideoDetail = useSelector(
    (state) => state.moviePage.movieVideoDetail
  );
  
  const { poster_path, original_title, overview } = movieTextDetail;
  const{key} = movieVideoDetail;

  console.log(poster_path + original_title +overview)
  console.log(key)


  return (
    <div className="bg-red-800">
      <h1>{id}</h1>
    </div>
  );
};

export default MoviePage;
