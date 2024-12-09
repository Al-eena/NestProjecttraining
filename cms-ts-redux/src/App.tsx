import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import { RouterProvider } from "react-router";
import routes from "./myroute";
import {
  CourseContext,
  ThemeContext,
  UserContext,
} from "./appContext/appContext";
import axios from "axios";
import { Course } from "./Model/course.model";
import { Provider } from "react-redux";
import myAppStore from "./store/appstore";

function App() {
  const [cList, setCList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => {
        setCList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //  define the theme value
  const [theme, setTheme] = useState({
    color: "red",
    bgcolor: "blue",
  });

  // defien status login status
  const [loginStaus, SetloginStaus] = useState(false);

  return (
    <ThemeContext.Provider value={theme}>
      <CourseContext.Provider value={{ ArrayOfCourse: cList }}>
      
          <RouterProvider router={routes}></RouterProvider>
      
      </CourseContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;