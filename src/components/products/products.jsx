import ProductCard from '../product-card/product-card';

import './products.scss'

const Products = ({data}) => {
  return (  
    <div className="products">
      <div className="container">
        <div className="products-wrapper">
          <ul className="products-list">
            {data.map((product, idx) => {
              return <ProductCard 
                      key={product.id}
                      index={idx}
                      img={product.img}
                      name={product.name}
                      country={product.country}
                      price={product.price}
                      clazz="" />
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
 
export default Products;