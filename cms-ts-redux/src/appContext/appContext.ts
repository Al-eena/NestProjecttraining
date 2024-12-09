import { createContext } from "react";
import { bool, boolean } from "yup";
import { Course } from "../Model/course.model";

// define the theme of my Application

export const ThemeContext = createContext({
  color: "",
  bgcolor: "",
});

//  define the user
export const UserContext = createContext({
  isLoggedIn: false,
  setisLoggedIn: () => {  
  },
});

export const CourseContext= createContext({

  ArrayOfCourse:[],

})