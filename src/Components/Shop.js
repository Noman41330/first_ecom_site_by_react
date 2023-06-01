import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
// import 'Products';
import Products from './products/Products';
import Cart from './Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10);
    // console.log(first10)
    const [products, setProducts] = useState(first10);
    // console.log(products)
    // const handleAddProduct = () =>{
    //     console.log('product added');
    // }
    return (
        <div className='shopContainer'>

            <div className='productContainer'>
                {/* {
                    products.map(pd => <Products product={pd}></Products>)

                } */}
            
                {
                    products.map((pd, index, handleAddProduct ) => (
                    <Products key={index} product ={pd} />
                    )
                    )}

            
            </div>
            <div className='cartContainer'>
                <Cart></Cart>
            </div>
            
        </div>
    );
};

export default Shop;