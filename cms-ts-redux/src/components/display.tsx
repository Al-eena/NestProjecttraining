import { Button, Card } from "react-bootstrap";
import { Course } from "../Model/course.model";
import React from 'react';

const Display = (props: any) => {
  return (
    <Card key={props.coursedetails.id} style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.coursedetails.cName}</Card.Title>
        <Card.Text>{props.coursedetails.cDescription}</Card.Text>
        <Button variant="primary">View</Button>
      </Card.Body>
    </Card>
  );
};

export default Display;