// Header Componnets based on function approach

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router";

const Header = (props: any) => {
  // manage the login Status
  const [isLoginStatus, SetisLoginStatus] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Course Management System</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to={"courses"}>
              Course
            </NavLink>
          </Nav>
          <Nav>
            {!isLoginStatus ? (
              <>
              <Nav className="me-auto">
                <NavLink className="nav-link" to={"login"}>
                  Login
                </NavLink>
              </Nav>
              <Nav className="me-auto">
                <NavLink className="nav-link" to={"register"}>
                  Register
                </NavLink>
              </Nav>
              </>
            ) : (
              <Nav.Link href="#pricing">Logout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;