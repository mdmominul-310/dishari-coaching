import React from 'react';
import './Cart.css';
import taka from '../../../images/taka.png'
const Cart = (props) => {
        const{course,price}=props.cart;
    return (
        <div className="list-cart border">
            <p> <small> {course} </small></p>
            <p>
              <small> <img src={taka} alt="" />  {price} </small>
            </p>
        </div>
    );
};

export default Cart;