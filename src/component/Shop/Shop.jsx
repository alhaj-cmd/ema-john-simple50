import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);
// console.log(products)
const [cart, setCart] = useState([])
    useEffect(()=>{
        // fetch('/src/fakeData/products.json')
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])

    const handleAddToCart = (product) => {
        // console.log(produc)
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
    
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;