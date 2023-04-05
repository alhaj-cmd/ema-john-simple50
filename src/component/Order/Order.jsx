import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>Order {product.length}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Order;