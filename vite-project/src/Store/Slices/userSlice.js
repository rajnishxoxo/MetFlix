import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetail:[]
  },
  reducers: {
    addUserInfo: (state, action) => {
        state.userDetail=action.payload;
    },
    removeUser:(state)=>{
        state=[];
    }
  },
});


export const{addUserInfo,removeUser} = userSlice.actions;

export default userSlice.reducer;