import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/src/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className='products-container'>
                <h3>Products coming here: {products.length}</h3>
            </div>
            <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;