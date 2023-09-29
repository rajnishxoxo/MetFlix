import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './Slices/movieSlice';
import userSlice from './Slices/userSlice';

const AppStore =  configureStore({
    reducer: {
        movies:movieSlice,
        user:userSlice,
    },
  })

  export default AppStore;