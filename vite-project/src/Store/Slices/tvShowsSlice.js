import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShows: null,
    singleTVShowDetail:[],
  },
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
    addTvShowsDetails: (state, action) => {
      state.singleTVShowDetail = action.payload;
    }
  },
});

export const { addTvShows ,addTvShowsDetails } = tvShowSlice.actions;

export default tvShowSlice.reducer;
