import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';


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
        // console.log(storedCart);
        const savedCart = [];
        // step:1
        for(const id in storedCart){
            // console.log(id);
            // step:2 get the product by using id
            const addedProduct = products.find(product =>product.id ===id)
            //  step:3 get quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
            addedProduct.quantity= quantity;
            // step:4 add the added product to the saved cart
            savedCart.push(addedProduct)
            }
            // step:5 set the cart
            setCart(savedCart)
        }
    },[products])
 
    const handleAddToCart = (product) => {
        // console.log(produc)
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd =>pd.id ===product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd =>pd.id !== product.id)
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }


    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
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
               <Cart cart={cart}
               handleClearCart={handleClearCart}
               >
               <Link className='proceed-link' to="/order">
                <button className='btn-proceed'>Review Order</button>
               </Link>
               </Cart>
            </div>
        </div>
    );
};

export default Shop;