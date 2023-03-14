import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin";
import DashboardAdmin from "../pages/DashboardAdmin";
function Root() {
    return (
        <>
            <NavbarAdmin />
            <DashboardAdmin/>
            <Outlet />
        </>
    )
}
export default Root;