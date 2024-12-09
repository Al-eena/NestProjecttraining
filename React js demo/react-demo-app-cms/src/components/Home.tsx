import { Outlet } from "react-router"
import Header from "./header"

const Home=()=>{
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    )
}

export default Home