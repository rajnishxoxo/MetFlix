import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { addUserInfo, removeUser } from "../Store/Slices/userSlice";
import { useDispatch } from "react-redux";

const Header = ({ handleClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row items-center mt-5  justify-between w-full lg:w-full lg:mt-0">
      <img
        className="w-20 lg:w-36"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      <button
        onClick={handleClick}
        className="bg-red-700 w-20 lg:w-36 h-10  rounded text-center mr-2 hover:bg-red-600 text-white font-bold"
      >
        Sign in
      </button>
    </div>
  );
};

export default Header;
