import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContextProvider"
import { useContext } from "react";
import CartItem from "../components/CartItem";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
      <h1 className="cart__title">Your Cart Items</h1>
      </div>
      <div className="cart__items">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return (
              <CartItem key={product.id} id={product.id} productName={product.productName} price={product.price} productImage={product.productImage}/>
            )
          }
        })}
      </div>

      {totalAmount > 0 ? (
      
      <div className="cart__checkout">
        <p className="cart__subtotal">Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button onClick={() => alert("Checkout functionality is unfortunately not available!")}>Checkout</button>
      </div>
      ) : (<h1>Your cart is empty.</h1>)}
    </div>
  )
};

export default Cart;
