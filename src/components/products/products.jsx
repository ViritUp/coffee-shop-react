import ProductCard from '../product-card/product-card';

import './products.scss'

const Products = ({data}) => {
  let inner = <ul className="products-list">
                {data.map((product, idx) => {
                  return <ProductCard 
                          key={product.id}
                          id={product.id}
                          index={idx}
                          img={product.img}
                          name={product.name}
                          country={product.country}
                          price={product.price}
                          clazz="" />
                })}
              </ul>
  if (data.length === 0) {
    inner = <div className='products__empty'>There are no products matching the specified filters</div>
  }

  return (  
    <div className="products">
      <div className="container">
        <div className="products-wrapper">
          {inner}
        </div>
      </div>
    </div>
  );
}
 
export default Products;