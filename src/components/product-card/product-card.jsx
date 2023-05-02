import './product-card.scss'

const ProductCard = ({img, name, country, price, clazz}) => {
  const mainClass = 'product-card ' + clazz;
  return (  
    <div className={mainClass}>
      <div className="product-card-wrapper">
        <div className="product-card__img">
          <img src={img} alt={name} />
        </div>
        <div className="product-card-content">
          <h5 className="product-card__name">{name}</h5>
          <div className="product-card__country">{country}</div>
          <div className="product-card__price">{price + '$'}</div>
        </div>
      </div>
    </div>
  );
}
 
export default ProductCard;