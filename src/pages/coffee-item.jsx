import Header from "../components/header/header";
import CoffeItemDetails from "../components/coffe-item-details/coffe-item-details";

import headerImg from '../img/bgs/coffee-header-bg.jpg'

import coffeeItemImg from '../img/products/product-1-big.jpg'

const CoffeeItem = () => {
  return (  
    <>
      <Header 
        img={headerImg} 
        title="Our Coffee" />
      <CoffeItemDetails 
        name="AROMISTICO Coffee 1 kg"
        img={coffeeItemImg}
        country="Brasil"
        descr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price="16.99"
      />
    </>
  );
}
 
export default CoffeeItem;