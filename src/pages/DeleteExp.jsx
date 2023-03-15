import { useLoaderData } from "react-router-dom"
import { useState } from "react";
import { productHandler } from "../handler/productHandler";
import DashboardAdmin from '../components/Dashboard'


function DeleteExp() {
    const { products} = useLoaderData();
    
    const [productsData, setProductsData] = useState(products);
   
    const deleteProduct = async (id) => {
       await productHandler.deleteProduct(id);
      setProductsData(productsData.filter(exp => exp.id !== id))
  }

    return (
        <>
        {productsData.map((exp) => (
            <DashboardAdmin key={exp.id} exp={exp} deleteProduct={deleteProduct} />
        ))}
      </>
    )
}

export default DeleteExp;