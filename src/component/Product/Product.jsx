import React from 'react';
import './Product.css'

const Product = (props) => {
    const  {img, name, seller, ratings, quantity, price} =props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className='product-info'>
          <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Star</p>
          </div>
          <button className='btn-cart'>Add to Cart <span></span> </button>
        </div>
    );
};

export default Product;