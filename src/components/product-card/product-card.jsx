import {NavLink} from 'react-router-dom'

import './product-card.scss'

const ProductCard = ({img, name, country, price, clazz, id}) => {
  
  const cropStr = (name) => {
    if (name.length >= 22) {
      const newName = name.substring(0, 21) + '...'
      return newName
    } else {
      return name
    }
  }

  
  const mainClass = 'product-card ' + clazz;
  
  return ( 
    <NavLink to={`/coffee-item/${id}`}>
      <li className={mainClass} title={name}>
        <div className="product-card-wrapper">
          <div className="product-card__img">
            <img src={img} alt={name} />
          </div>
          <div className="product-card-content">
            <h5 className="product-card__name">{cropStr(name)}</h5>
            <div className="product-card-bottom">
              <div className="product-card__country">{country}</div>
              <div className="product-card__price">{price + '$'}</div>
            </div>
          </div>
        </div>
      </li>
    </NavLink> 
  );
}
 
export default ProductCard;