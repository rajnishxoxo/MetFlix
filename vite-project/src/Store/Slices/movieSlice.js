import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    nowPlayingMovies: null,
    movieTrailer:null,
    popularMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer:(state,action)=>{
      state.movieTrailer=action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { addNowPlayingMovies ,addMovieTrailer ,addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;
