const Product = ({id, productName, price, productImage}) => {
  return (
    <div className="product">
        <img className="product__img" src={productImage} alt={productName} />
        <div className="product__description">
            <p>
                <b>{productName}</b>
            </p>
            <p>{price}</p>
        </div>

        <button className="product__addToCartBtn">
        Add To Cart 
      </button>
    </div>

    
  )
}

export default Product