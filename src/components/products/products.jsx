import ProductCard from '../product-card/product-card';

import product1 from '../../img/products/product-1.jpg'
import product2 from '../../img/products/product-2.jpg'
import product3 from '../../img/products/product-3.jpg'

import './products.scss'

const Products = () => {
  return (  
    <div className="products">
      <div className="container">
        <div className="products-wrapper">
          <ul className="products-list">
            <ProductCard 
              img={product1}
              name="Solimo Coffee Beans 2 kg"
              country="Brazil"
              price="10.73"
              clazz="" />
            <ProductCard 
              img={product2}
              name="Presto Coffee Beans 1 kg"
              country="Kenya"
              price="15.99"
              clazz="" />
            <ProductCard 
              img={product3}
              name="AROMISTICO Coffee 1 kg"
              country="Columbia"
              price="6.99"
              clazz="" />
            <ProductCard 
              img={product1}
              name="Solimo Coffee Beans 2 kg"
              country="Brazil"
              price="10.73"
              clazz="" />
            <ProductCard 
              img={product2}
              name="Presto Coffee Beans 1 kg"
              country="Kenya"
              price="15.99"
              clazz="" />
            <ProductCard 
              img={product3}
              name="AROMISTICO Coffee 1 kg"
              country="Columbia"
              price="6.99"
              clazz="" />
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Products;