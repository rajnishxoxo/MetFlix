import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showForm, setShowForm] = useState(false);
  const [newUserForm, setNewUserForm] = useState(false);

  const handleShowNewUserForm = () => {
    if (newUserForm === false) {
      setNewUserForm(true);
    } else {
      setNewUserForm(false);
    }
    console.log(newUserForm);
  };

  const handleClick = () => {
    if (showForm === false) {
      setShowForm(true);
    } else {
      setShowForm(false);
    }
  };
  return (
    <div className="overflow-hidden w-screen">
      <Header handleClick={handleClick} />
      <div className="absolute top-0 -z-10">
        <div class="absolute inset-0  bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent"></div>
        <img
          className="object-cover h-screen lg:h-auto"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      {showForm ? (
        <></>
      ) : (
        <div className="w-3/4 m-auto mt-40">
          <h1 className="text-white text-2xl   text-center lg:text-6xl ">
            The biggest Indian hits. The best Indian stories. All streaming
            here.
          </h1>
          <p className="text-white text-xl mt-5 lg:text-3xl lg:text-center ">
            Watch anywhere. Cancel anytime.
          </p>
        </div>
      )}

      {showForm && (
        <div className="absolute top-[250px] w-11/12 left-2/4 h-3/4 lg:w-3/4">
          <form
            onClick={(e) => e.preventDefault()}
            className=" transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-2  rounded-lg shadow-lg lg:w-4/5"
          >
            <h1 className="text-center text-red-600 font-medium m-1 text-2xl lg:text-center lg:text-4xl lg:my-3">
              {newUserForm ? "Sign-Up" : "Login"}
            </h1>
            {newUserForm && (
              <input
                className="w-full p-2 m-2 rounded"
                type="text"
                placeholder="Enter Your Name"
              />
            )}
            <input
              className="w-full p-2 m-2 rounded"
              type="text"
              placeholder="Enter Your Email"
            />
            <input
              className="w-full p-2 m-2 rounded"
              type="password"
              placeholder="Enter Your Password"
            />
            <button className="bg-red-700 w-20 h-10 rounded ml-40 m-2 text-center hover:bg-red-600 text-white font-bold lg:ml-[350px] lg:mt-5">
              {newUserForm ? "Sign up" : "Login"}
            </button>
            <p
              onClick={handleShowNewUserForm}
              className="text-white cursor-pointer font-normal text-lg "
            >
              {newUserForm ? (
                <p className="text-center font-light text-lg">
                  Already have an Account , Login now
                </p>
              ) : (
                <p className="text-center font-light text-lg">
                  New to Netflix. Click Here to Sign up
                </p>
              )}
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
