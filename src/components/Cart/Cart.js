import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const priceArray = props.price;
  const enrolledCourseAmount = priceArray.length;
  let totalPrice = priceArray.reduce((total, pValue) => total + pValue, 0);

  const formatNumber = num => {
    const precision = (num).toFixed(2);
    return Number(precision);
  }
  return (
    <div class="cart bg-warning row align-items-center my-3 p-3">

      <div class="col-md-6 text-center">
        <h3>Items Ordered: {enrolledCourseAmount}</h3>
      </div>
      <div class="col-md-6 text-center">
        <h3>Total Price: ${formatNumber(totalPrice)}</h3>
      </div>
    </div>
  );
};

export default Cart;