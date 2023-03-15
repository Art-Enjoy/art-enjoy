import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/FooterSesion";

import HomeUser from "../pages/HomeUser"
function Root() {
    return (
        <>
            <NavbarAdmin />
            <HomeUser/>
            <Outlet />
            <Footer />
            

            
          
        </>
    )
}
export default Root;