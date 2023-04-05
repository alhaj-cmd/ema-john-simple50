import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart = useLoaderData();
    console.log(savedCart);
    const [carts, setCarts] =useState(savedCart);
   
    const handleloadToCart = (id) =>{
        const remaining =carts.filter(product=>product.id !== id)
        setCarts(remaining);
        removeFromDb()
    
    }
    return (
        <div className="shop-container">
            <div className="review-container">
                {
                    carts.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleloadToCart={handleloadToCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Order;