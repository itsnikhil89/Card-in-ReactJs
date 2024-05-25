import './products.css';

import Price from './price.jsx';

 function Products({title,desc,mrp,discount}){
    return(
        <div className="products">
          <h5>{title}</h5><br></br><br></br><br></br>
          <p>{desc}</p>
          
          <Price mrp="1200" discount="999"></Price>
        </div>
    )
}
export default Products;