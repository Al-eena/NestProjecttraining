import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { RouterProvider } from "react-router";
import routes from "./myroute";


function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;