import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    horrorMovie: null,
    actionMovie: null,
    romanticeMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addHorrorMovies: (state, action) => {
      state.horrorMovie = action.payload;
    },

    addActionMovies: (state, action) => {
      state.actionMovie = action.payload;
    },
    addRomanticeMovies: (state, action) => {
      state.romanticeMovie = action.payload;
    },
    addGptMovie: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addActionMovies,
  addHorrorMovies,
  addMovieTrailer,
  addPopularMovies,
  addRomanticeMovies,
  addGptMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
