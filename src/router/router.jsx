
import { createBrowserRouter } from "react-router-dom";
import ExpDetail from "../pages/ExpDetail"
import DashboardAdmin from "../pages/DashboardAdmin"
import AddExpAdmin from "../pages/AddExpAdmin"
import Root from"./Root"



export const router = createBrowserRouter ([{
    path: '/',
        element: < Root />, 
        children: [
           
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
                ]

            }
        ]

) 
async function loaderPost  ({ params })  {
    const post = await productHandler.loadProduct(params.id)  
    return { post };
};

async function loaderAdvertisement () {
 const products = await productHandler.loadProducts()
    return { products };
 };

