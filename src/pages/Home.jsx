import Product from '../components/Product';
import {PRODUCTS} from '../products'

const Home = () => {
  return (
    <div className="home">
        <div className="home__title">
            <h1>Web Shop</h1>
        </div>
        <div className="home__products">
            {PRODUCTS.map((product) => (
              <Product key={product.id} id={product.id} productName={product.productName} price={product.price} productImage={product.productImage}/>
            ))}
        </div>
    </div>
  )
}

export default Home;