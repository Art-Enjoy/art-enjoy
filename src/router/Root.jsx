import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Slogan from"../components/Slogan"
import NavbarUser from "../components/NavbarUser";

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