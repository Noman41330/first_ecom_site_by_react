import React from 'react';
import './Cart.css';
const Cart = () => {
    return (
        <div className='cart'>
            <h1 className='cardHeading'>Order Summery</h1>
            <p>Item Ordered: 3</p>
            <p>Shipping cost: $4.25</p>
            <p>Tax/Vat: $1.5</p>
            <h3 class='cartPrice'>Price: $200</h3>

        </div>
    );
};

export default Cart;