import { useContext } from 'react'
import { ShopContext } from '../context/ShopContextProvider'

const CartItem = ({id, productName, price, productImage}) => {

    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img className="cartItem__img"src={productImage} alt={productName} />
        <div className="cartItem__description">
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <div className="cartItem__countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(e.target.value)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem