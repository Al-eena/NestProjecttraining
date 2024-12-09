import axios from "axios";
import { useEffect, useState } from "react";
import { getAllCourse } from "../services/course.service";
import { Course } from "../Model/course.model";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup'
import Display from "./display";

const ViewCourse = () => {
  const [courseList, SetCourseLIst] = useState(Array<Course>);
  useEffect(() => {
    getAllCourse()
      .then((res) => {
        console.log(courseList);
        SetCourseLIst(res);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);
  return (
    <>
      <h1>Availabe Course</h1>
    <CardGroup style={{display:"flex", flexWrap:'wrap', }}>
    {courseList.map((course) => {
        return (
          <>
           <Display coursedetails={course}></Display>
          </>
        );
      })}
    </CardGroup>
    </>
  );
};

export default ViewCourse;