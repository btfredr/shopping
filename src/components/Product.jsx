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
    </div>
  )
}

export default Product