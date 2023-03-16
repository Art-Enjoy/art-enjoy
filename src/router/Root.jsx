import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";

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