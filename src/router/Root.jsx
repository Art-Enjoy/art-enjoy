import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import NavbarUser from "../components/NavbarUser";
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