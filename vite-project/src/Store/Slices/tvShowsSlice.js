import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "tvShows",
  initialState: {
    tvShows: null,
  },
  reducers: {
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
  },
});

export const { addTvShows } = tvShowSlice.actions;

export default tvShowSlice.reducer;
