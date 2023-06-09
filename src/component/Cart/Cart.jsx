import React, { Children } from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {

    // cart total price
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        // two way system
        // if(product.quantity === 0){
        //     product.quantity = 1;
        // }
        // same way
        // product.quantity=product.quantity || 1;
        total = total + product.price*product.quantity
        totalShipping= totalShipping+ product.shipping;
        quantity = quantity+product.quantity
    }

    const totalTax =total*7/100;

    const grandTotal = total+totalShipping+totalTax;
    return (
        <div className='cart'>
             <h3>Order Summary</h3>
                <p>Cart Item : {quantity}</p>
                <p>Total Price : {total}</p>
                <p>Total Shipping :{totalShipping}</p>
                <p>Tax : {totalTax.toFixed(2)}</p>
                <h6>Grand Total :{grandTotal.toFixed(2)}</h6>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                   <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    {children}
        </div>
    );
};

export default Cart;