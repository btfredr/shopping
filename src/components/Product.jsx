import { ShopContext } from "../context/ShopContextProvider"
import {useContext} from 'react'

const Product = ({id, productName, price, productImage}) => {
  const {addToCart, cartItems} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
        <img className="product__img" src={productImage} alt={productName} />
        <div className="product__description">
            <p className="product__title">
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>

        <button className="product__addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>

    
  )
}

export default Product