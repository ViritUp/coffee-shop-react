import './best-products.scss'
import ProductCard from '../product-card/product-card';

import product1 from '../../img/products/product-1.jpg'
import product2 from '../../img/products/product-2.jpg'
import product3 from '../../img/products/product-3.jpg'

const BestProducts = () => {
  return (  
    <section className="best">
      <div className="container">
        <div className="best-wrapper">
          <h2 className="best__title">Our best</h2>
          <ul className="best-list">
            <ProductCard 
              img={product1}
              name="Solimo Coffee Beans 2 kg"
              country=""
              price="10.73"
              clazz="product-card--best" />
            <ProductCard 
              img={product2}
              name="Presto Coffee Beans 1 kg"
              country=""
              price="15.99"
              clazz="product-card--best" />
            <ProductCard 
              img={product3}
              name="AROMISTICO Coffee 1 kg"
              country=""
              price="6.99"
              clazz="product-card--best" />
          </ul>
        </div>
      </div>
    </section>
  );
}
 
export default BestProducts;