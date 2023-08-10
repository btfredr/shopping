import React from 'react'

const CartItem = ({id, productName, price, productImage}) => {
  return (
    <div className="cartItem">
        <img className="cartItem__img" src={productImage} alt={productName} />
        <div className="cartItem__description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default CartItem