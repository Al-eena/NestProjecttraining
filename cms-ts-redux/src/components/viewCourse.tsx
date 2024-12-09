import axios from "axios";
import { useContext, useEffect, useState } from "react";
import React from 'react';
import { getAllCourse } from "../services/course.service";
import { Course } from "../Model/course.model";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Display from "./display";
import { CourseContext } from "../appContext/appContext";

const ViewCourse = () => {
  const [courseList, SetCourseLIst] = useState([]);
  const mycourse=useContext(CourseContext);


  useEffect(() => {
    // getAllCourse()
    //   .then((res) => {
    //     console.log(courseList);
    //     SetCourseLIst(res);
    //   })
    //   .catch((err) => {
    //     console.log("err");
    //   });
    SetCourseLIst(mycourse.ArrayOfCourse)

  }, []);
  return (
    <>
      <h1>Availabe Course</h1>
      {/* <CardGroup style={{display:"flex", flexWrap:'wrap' */}
      <Row xs={1} md={2} className="g-2">
        {courseList.map((course) => {
          return (
            <>
              {/* <Col md={3} className="g-4"> */}
                <Display coursedetails={course}></Display>
              {/* </Col> */}
            </>
          );
        })}

        {/* </CardGroup> */}
      </Row>
    </>
  );
};

export default ViewCourse;