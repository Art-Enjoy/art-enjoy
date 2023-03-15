import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";

import HomeUser from "../pages/HomeUser"
function Root() {
    return (
        <>
            <NavbarAdmin />
            <HomeUser/>
            <Outlet />

            
          
        </>
    )
}
export default Root;