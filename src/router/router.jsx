import { createBrowserRouter } from "react-router-dom";
import ExpDetail from "../pages/ExpDetail"
import ExpDetailUser from "../pages/ExpDetailUser"
import DashboardAdmin from "../pages/DashboardAdmin"
import DashboardUser from "../pages/DashboardUser"
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
import PromotionEsp from "../pages/PromotionEsp";
import PromotionTarifa from "../pages/PromotionTarifa";
import PromotionMalg from "../pages/PromotionMalg";
import Cart from "../components/Cart";




export const router = createBrowserRouter([{
    path: '/',
       element: < Root />, 
        children: [
                    {
                    path: '/',
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
                        loader: loaderexp
                        
                    }, 
                    {
                        path: '/expdetailuser/:id',
                        element: <ExpDetailUser />,
                        loader: loaderexp
                        
                    }, 
                    {
                        path: "/dashboardAdmin/editProduct/:id",
                        element: <EditProduct />,
                        loader: loaderexp, 
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
                    {
                        path: '/dashboardUser',
                        element: <DashboardUser />,
                        loader: loaderAdvertisement,
                       
                    }, 
                    {
                        path: '/plazaespaña-sevilla',
                        element: <PromotionEsp />,
                        loader: loaderAdvertisement,
                       
                    },   
                    {
                        path:'/trafalgar-cadiz',
                        element: <PromotionTarifa />,
                        loader: loaderAdvertisement,
                       
                    },   
                    {
                        path: '/picasso-malaga',
                        element: <PromotionMalg />,
                        loader: loaderAdvertisement,
                       
                    }, 
                    {
                        path: "/cart",
                        element: <Cart />
                    },
  
                ]
}
]

)
async function loaderexp({ params }) {
    const exp = await productHandler.loadProduct(params.id)
    return { exp };
};

async function loaderAdvertisement() {
    const products = await productHandler.loadProducts()
    return { products };
};


