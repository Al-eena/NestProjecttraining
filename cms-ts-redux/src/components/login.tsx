import { useContext } from "react";
import React from 'react';
import { Container, Form, Button } from "react-bootstrap";
import { UserContext } from "../appContext/appContext";
import { useDispatch } from "react-redux";
import { login } from "../appSlicers/userSlicer";
import { useNavigate } from "react-router";

const Login = () => {

  const dispatch= useDispatch();
  const naviagte= useNavigate();
  const myuser = useContext(UserContext);
  // define the schema
  // define the formik
  const userLogin = () => {
    // alert("Sucess");
    dispatch(login());
    naviagte('/courses/all');
    
    
    
  };
  return (
    <Container className="mt-5">
      <h1>Login</h1>
      {/* <form className="mt-5" onSubmit={userLogin}> */}
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>password</Form.Label>
          <Form.Control type="password" placeholder="enter password" />
        </Form.Group>
        <Button type="submit" onClick={userLogin} >Register</Button>
      {/* </form> */}
    </Container>
  );
};

export default Login;