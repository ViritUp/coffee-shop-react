import './best-products.scss'
import ProductCard from '../product-card/product-card';

const BestProducts = ({data}) => {
  return (  
    <section className="best">
      <div className="container">
        <div className="best-wrapper">
          <h2 className="best__title">Our best</h2>
          <ul className="best-list">
            {data.map((product, idx) => {
              if (idx < 3) {
                return <ProductCard 
                key={product.id}
                index={idx}
                id={product.id}
                img={product.img}
                name={product.name}
                country=""
                price={product.price}
                clazz="product-card--best" />
              } else {
                return null
              }
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
 
export default BestProducts;