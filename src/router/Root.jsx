import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";


function Root() {
    return (
        <>
            <NavbarAdmin />
            
            <Outlet />

            
          
        </>
    )
}
export default Root;