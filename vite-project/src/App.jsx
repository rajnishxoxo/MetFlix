import React from "react";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Components/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/home",
        element:<HomePage/>
    }

  ]);
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
};

export default App;
