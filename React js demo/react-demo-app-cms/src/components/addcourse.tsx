import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";


const AddCourse=()=>{

    const [course, setCourse]=useState({
        cName:"",
        cDescription:""
    });

    const save=()=>{
       console.log(course);
         
    }
    const textChange=(event:any)=>{
        // setName(event.target.value)
        setCourse({
            ...course,
            [event.target.name]:event.target.value
        })
    }

    return(
        <Container className="mt-5">
        <h1>Add new Course</h1>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name of Course</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Description</Form.Label>
            <Form.Control type="password" placeholder="enter password" />
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </Container>

    )
}

export default AddCourse