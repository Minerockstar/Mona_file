import {Link} from "react-router-dom"
import products from './data'

const Products = () => {
  return (
    <div className="names">
           <div className="container">
            <div className="divprdcts">
                <h1 >Products</h1>
            <div className="list">
            <li className="">
             <Link className="homelink" to="/">Home / </Link> 
              </li>
              <li className="prodcts-active"> Products</li></div>
           </div>
           </div>

           <div className="productcontainer">
            <div className="productcontainers"> 
              {products.map((product)=>{
                return(
                  <div className="imagecontainer" key={product.id}>
                      
                      <img src={product.image} alt="Image" className="imagesall" />
                    
                    <h5>{product.name}</h5>
                      <p>{product.price}</p>
                  
                  </div>
                )
              })}
            </div>
           </div>
    </div>
  )
}

export default Products