
import * as path from 'path';
import { Component } from "react";
import { createBrowserRouter } from "react-router";
import App from "./App";
import Login from "./components/login";
import Home from "./components/Home";
import Register from "./components/register";
import AddCourse from "./components/addcourse";
import CourseDashboard from "./components/courseDashboard";
import ViewCourse from "./components/viewCourse";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "courses",
        Component: CourseDashboard,
        children: [
          {
            path: "",
            Component: ViewCourse,
          },
          {
            path: "add",
            Component: AddCourse,
          },
          {
            path:'all',
            Component:ViewCourse
          }
        ],
      },
    ],
  },
]);

export default routes;