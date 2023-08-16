import Product from '../components/Product';
import {PRODUCTS} from '../products'

const Home = () => {
  return (
    <div className="home">
        <div className="home__title">
            <h1>Fredrik's Tech Store</h1>
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