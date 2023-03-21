import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import Footer from "../components/Footer";

function Root() {
    return (
        <>
            <NavbarAdmin />
            
            <Outlet />
            <Footer />
      
        </>
    )
}
export default Root;