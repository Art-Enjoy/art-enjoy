import { Outlet } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import Slogan from"../components/Slogan"

function Root() {
    return (
        <>
            <NavbarUser />
            <Slogan/>
            <Outlet />
            <Footer />
      
        </>
    )
}
export default Root;