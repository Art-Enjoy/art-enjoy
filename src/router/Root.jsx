import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import Slogan from"../components/Slogan"

function Root() {
    return (
        <>
            <NavbarAdmin />
            <Slogan/>
            <Outlet />
            <Footer />
      
        </>
    )
}
export default Root;