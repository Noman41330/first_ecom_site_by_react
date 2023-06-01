import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = ({product}) => {
// const Products = ({props}) => {
    // console.log(product?.name)
    // console.log(typeof(props.product));
    return (
        <div className='product'>
           <div>
                <img src={product.img} alt=''></img>
           </div>
           <div>
           <h3 class='productName'>{product.name}</h3>
           
           <h2>Price: ${product.price}</h2>
           <p><small>by: {product.seller}</small></p>
          
           <p><small>only {product.stock} left in stock</small></p>
           <button className='main_button'><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            
           </div>
           
           {/* <h2>{props.product?.name}</h2> */}
        </div>
    );
};

export default Products;