import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './Slices/movieSlice';
import userSlice from './Slices/userSlice';
import tvShowsSlice from './Slices/tvShowsSlice';

const AppStore =  configureStore({
    reducer: {
        movies:movieSlice,
        user:userSlice,
        tvShows:tvShowsSlice,
        
    },
  })

  export default AppStore;