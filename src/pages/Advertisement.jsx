import './Advertisement.css'
import DashboardAdmin from '../components/DashboardAdmin'
import 'bootstrap/dist/css/bootstrap.min.css';


const Advertisement = () => { 
    

    return (
        <>
        {productsData.map((post) => (
            <DashboardAdmin key={post.id} post={post} deleteProduct={deleteProduct} />
        ))}
      </>
    )
 };
 export default Advertisement;


