import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardUser.css";
import Button from "react-bootstrap/Button";
import CartContext from "../../context/CartContext";



import Card from "react-bootstrap/Card";
import { Link,  } from "react-router-dom";





function DashboardUser() {

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };
  // const { products} = useLoaderData() ;
  // const [productsData,] = useState(products);
  // const [searchQuery, setSearchQuery] = useState("");
  // const data = productsData.filter(
  //   (product) =>
  //     product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     product.price.toLowerCase().includes(searchQuery.toLowerCase())||
  //     product.location.toLowerCase().includes(searchQuery.toLowerCase())

  // );

  const { addItemToCart, products } = useContext(CartContext);



  return (
    // <div className="container-gn" id="text">
    //   <h1>Todas las experiencias</h1>
    // <>
    //   <div className="container-bar">
    //     <input
    //       className="searchStyle"
    //       type="text"
    //       placeholder="🔍 Buscar por experiencia o localización"
    //       value={searchQuery}
    //       onChange={handleSearchChange}
    //     />
    //   </div>
    <div className="cards">
      {products &&
        products.map((product) => 
           (
            <div key={product.id} className="card" style={{ width: '18rem' }}>
              <Link to={`/expdetailuser/${product.id}`}><Card.Img variant="top" className="img-size" src={product.img} /></Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.location}</Card.Text>
               <Link to={`/expdetailuser/${product.id}`}>
                  <Button className="btn-detail" >Detalles</Button>
                </Link>
                {!product.inCart ? (
                  <button onClick={() => addItemToCart(product)}>
                    Add to Cart
                  </button>
                ) : (
                  <button>En el carrito</button>
                )}
              </Card.Body>


            </div>
          )
        )
     }


    </div>

  );
};

export default DashboardUser;