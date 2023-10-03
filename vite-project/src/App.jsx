import React from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";
import MoviePage from "./Components/MoviePage";
import TVPage from'./Components/TVPage';
import Horror from "./Components/Genres/Horror";
import Action from "./Components/Genres/Action";
import Romance from "./Components/Genres/Romance";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path:'/moviePage/:id',
      element:<MoviePage/>
    },
    {
      path:'/tvPage/:id',
      element:<TVPage/>
    },
    {
      path:'/horror/',
      element:<Horror/>
    },
    {
      path:'/action',
      element:<Action/>
    },
    {
      path:'/romance',
      element:<Romance/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
