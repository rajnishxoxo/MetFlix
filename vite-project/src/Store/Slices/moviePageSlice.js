import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
  name: "moviePage",
  initialState: {
    movieTextDetail: null,
    movieVideoDetail: null,
  },
  reducers: {
    addMovieTextDetail: (state, action) => {
      state.movieTextDetail = action.payload;
    },

    addMovieVideoDetails: (state, action) => {
        state.movieVideoDetail=action.payload;
    },
  },
});

export const{addMovieTextDetail,addMovieVideoDetails}= moviePageSlice.actions;

export default moviePageSlice.reducer;
