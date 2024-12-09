import { Nav, Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router"

const CourseDashboard=()=>{
    return(
        <>
        <h1> Course DashBoard</h1>
        <Navbar>
            <Nav>
                <div>
                <Link className="nav-link" to={"add"}>Add Course</Link>   
                </div>
                <div>
                <Link className="nav-link" to={""}>View Course</Link>
                </div>
            </Nav>
        </Navbar>
        <Outlet></Outlet>
        </>
    )
}

export default CourseDashboard