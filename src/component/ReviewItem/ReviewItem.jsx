import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleloadToCart}) => {
    // console.log(product,handleloadToCart)
    const {img, id, name, price, quantity} = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>{name}</p>
                <p className="orange-text">Price : ${price}</p>
                <p className="orange-text">Quantity : {quantity}</p>
            </div>
                <button className='btn-delete' onClick={() => handleloadToCart(id)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;