import Divider from "../divider/divider";

import './coffe-item-details.scss'

const CoffeItemDetails = ({name, img, country, descr, price }) => {
  return (  
    <section className="coffee-item">
      <div className="container">
        <div className="coffee-item-wrapper">
          <div className="coffee-item__photo">
            <img src={img} alt={name} />
          </div>
          <div className="coffee-item-info">
            <h2 className="coffee-item__title">About it</h2>
            <Divider color="black" />
            <div className="coffee-item-details">
              <div className="coffee-item__char coffee-item__country"><span>Country:</span> {country}</div>
              <div className="coffee-item__char coffee-item__descr"><span>Description:</span> {descr}</div>
              <div className="coffee-item__char coffee-item__price"><span>Price:</span> <span className='price'>{price}$</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default CoffeItemDetails;