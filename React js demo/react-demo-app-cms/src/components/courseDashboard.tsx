import { Nav, Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router"

const CourseDashboard=()=>{
    return(
        <>
        <h1> Course DashBoard</h1>
        <Navbar>
            <Nav>
                <Link className="nav-link" to={"add"}>Add Course</Link>
                <Link className="nav-link" to={"all"}>View Course</Link>
            </Nav>
        </Navbar>
        <Outlet></Outlet>
        </>
    )
}

export default CourseDashboard