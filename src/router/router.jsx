
import { createBrowserRouter } from "react-router-dom";
import ExpDetail from "../pages/ExpDetail"
import DashboardAdmin from "../pages/DashboardAdmin"
import AddExpAdmin from "../pages/AddExpAdmin"
import { productHandler } from "../handler/productHandler";
import EditProduct from "../pages/EditProduct"
import HomeUser from "../pages/HomeUser"
import Root from"./Root"
import CookiesPolicy from "../pages/CookiesPolicy";
import Contact from "../pages/Contact";
import Questions from "../pages/Questions";
import AboutUs from "../pages/AboutUs";
import LoginAdmin from "../pages/LoginAdmin";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import FormsUser from "../pages/FormsUser"




export const router = createBrowserRouter([{
    path: '/',
       element: < Root />, 
        children: [
                    {
                    path: '/User',
                    element: <HomeUser />,
                    },
                    {
                        path: '/dashboardAdmin',
                        element: <DashboardAdmin />,
                        loader: loaderAdvertisement,
                       
                    },  
                    {
                        path: '/addexpadmin',
                        element: <AddExpAdmin />,
                    },  
                    {
                        path: '/expdetail/:id',
                        element: <ExpDetail />,
                        loader: loaderPost
                        
                    }, 
                    {
                        path: "/dashboardAdmin/editProduct/:id",
                        element: <EditProduct />,
                        loader: loaderPost, 
                    },
                    {
                        path: "/cookiespolicy",
                        element: <CookiesPolicy />,
                    },
                    {
                        path: "/contact",
                        element: <Contact />,
                    },
                    {
                        path: "/questions",
                        element: <Questions />,
                    },
                    {
                        path: "/aboutus",
                        element: <AboutUs />,
                    },
                    {
                        path: '/formsUser',
                        element: <FormsUser />,
                    },  
                    
                     {
                        path: "/admin",
                        element: <LoginAdmin />,
                        
                    }, 
                    {
                        path: "/login",
                        element: <Login />,
                        
                    }, 
                    {
                        path: "/signin",
                        element: <SignIn />,
                        
                    }, 
                ]
}
]

)
async function loaderPost({ params }) {
    const post = await productHandler.loadProduct(params.id)
    return { post };
};

async function loaderAdvertisement() {
    const products = await productHandler.loadProducts()
    return { products };
};

