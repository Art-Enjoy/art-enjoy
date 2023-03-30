import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";
import Slogan from"../components/Slogan"

function Root() {
    return (
        <>
            <NavbarAdmin />
            <NavbarUser />
            <Slogan/>
            <Outlet />
            <Footer />
      
        </>
    )
}
export default Root;