import './Advertisement.css'
import DashboardAdmin from '../components/DashboardAdmin'
import 'bootstrap/dist/css/bootstrap.min.css';


const Advertisement = () => { 
    

    return (
        <>
        {productsData.map((exp) => (
            <DashboardAdmin key={exp.id} exp={exp} deleteProduct={deleteProduct} />
        ))}
      </>
    )
 };
 export default Advertisement;


