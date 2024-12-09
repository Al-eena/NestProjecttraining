// Header Componnets based on function approach

import { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { logout } from "../appSlicers/userSlicer";

const Header = (props: any) => {
  // manage the login Status
  // const [isLoginStatus, SetisLoginStatus] = useState(false);
  const isLoginStatus = useSelector((state: any) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoginStatus);

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
            {/* conditionl rendering the compontos */}
            {!isLoginStatus ? (
              <>
                {/* <Nav.Link href="#features">Register</Nav.Link>
                <Nav.Link href="#features">Login</Nav.Link> */}
                <NavLink className="nav-link" to={"login"}>
                  Login
                </NavLink>
                <NavLink className="nav-link" to={"register"}>
                  Register
                </NavLink>
              </>
            ) : (
              <Nav.Link >
                  <Button onClick={()=>{dispatch(logout())}}> Logout</Button>
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;