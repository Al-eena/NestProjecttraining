import { useContext, useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { addCourse } from "../services/course.service";
import { useFormik } from "formik";
import React from 'react';
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../appContext/appContext";


const AddCourse = () => {

  const courseTheme= useContext(ThemeContext);
const navigate= useNavigate();

  const courseSchema = yup.object({
    cName: yup
      .string()
      .required("Field is Required")
      .min(5, "min 5 char req")
      .max(10, "only 10 char allowed"),
    cDescription: yup
      .string()
      .required("Description is Required")
      .min(10, "MIN 10")
      .max(20, "MIN 20"),
  });
  // define a course object using formik

  const courseFormik = useFormik({
    initialValues: {
      cName: "",
      cDescription: "",
    },
    validationSchema: courseSchema,
    onSubmit: (values) => {
      // console.log(values);
      const response = addCourse(values);
      // console.log(response);
      
      response.then((res)=>{
       if(res===201)
       {
        alert("sucess");
        navigate('/courses/all');

       }
       else if(res===404)
       {
        alert("no Fount")
       }
       
        
      })
      .catch((err)=>{
       alert("Server Not Running")
        
      })
     
    },
    onReset: () => {
      courseFormik.resetForm();
    },
  });

  return (
 
    <Container className="mt-5">
      <h1 style={{ backgroundColor: courseTheme.bgcolor}} >Add new Course</h1>
      <Form className="mt-5" onSubmit={courseFormik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name of Course</Form.Label>
          <Form.Control
            name="cName"
            type="string"
            placeholder="name of the course"
            onChange={courseFormik.handleChange}
            value={courseFormik.values.cName}
          />
          <Col>
            <p className="text-danger">{courseFormik.errors.cName}</p>
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Description</Form.Label>
          <Col>
            <Form.Control
              name="cDescription"
              type="string"
              onChange={courseFormik.handleChange}
              value={courseFormik.values.cDescription}
            />
          </Col>
          <Col>
            <p className="text-danger">{courseFormik.errors.cDescription}</p>
          </Col>
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </Container>
  );
};

export default AddCourse;