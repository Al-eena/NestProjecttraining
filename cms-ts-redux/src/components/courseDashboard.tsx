import { useContext } from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router"
import React from 'react';
import { ThemeContext } from "../appContext/appContext"

const CourseDashboard=()=>{
    // access the theme For course
    const dashboardTheme= useContext(ThemeContext);
    return(
        <>
        <h1 style={{backgroundColor:dashboardTheme.bgcolor, color:dashboardTheme.color}}> Course DashBoard</h1>
        <Navbar>
            <Nav>
                {/* <Nav.Link>Add</Nav.Link>
                <Nav.Link>View</Nav.Link> */}
                <Link className="nav-link" to={"add"}>Add Course</Link>
                <Link className="nav-link" to={"all"}>View Course</Link>
            </Nav>
        </Navbar>
        <Outlet></Outlet>
        </>
    )
}

export default CourseDashboard