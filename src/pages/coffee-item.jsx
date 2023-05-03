import {useParams} from 'react-router-dom'

import Header from "../components/header/header";
import CoffeItemDetails from "../components/coffe-item-details/coffe-item-details";

import headerImg from '../img/bgs/coffee-header-bg.jpg'

const CoffeeItem = ({data}) => {
  const {id} = useParams();
  let coffeeItem = '';
  data.forEach(item => {
    if(item.id === id) {
      coffeeItem = item;
    }
  });

  return (  
    <>
      <Header 
        img={headerImg} 
        title="Our Coffee" />
      <CoffeItemDetails 
        name={coffeeItem.name}
        img={coffeeItem.imgBig}
        country={coffeeItem.country}
        descr={coffeeItem.descr}
        price={coffeeItem.price}
      />
    </>
  );
}
 
export default CoffeeItem;