import { PRODUCTS } from "../products";
import { ShopContext } from "../context/ShopContextProvider"
import { useContext } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cartItems} = useContext(ShopContext);

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
    </div>
  )
};

export default Cart;
