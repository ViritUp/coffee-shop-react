import Header from "../components/header/header";
import AboutSmth from "../components/about-smth/about-smth";
import Line from "../components/line/line";
import Filters from "../components/filters/filters";
import Products from "../components/products/products";

import headerImg from '../img/bgs/coffee-header-bg.jpg'
import beansPhoto from '../img/photos/beans-photo.jpg'

const Coffee = () => {
  const textAbout = <>
    <p>Coffee House offers only the freshest, highest quality coffee beans. We import premium specialty coffee beans from the finest farms around the world.</p>
    <p>We are passionate about bringing you the most exceptional, flavorful coffee beans for an unparalleled taste experience. Our coffee beans are fresh, handpicked and expertly roasted to perfection. Indulge your senses with our premium coffees from field to cup.</p>
  </>
  return (  
    <>
      <Header 
        img={headerImg} 
        title="Our Coffee" />
      <AboutSmth
        img={beansPhoto}
        title="About our beans"
        text={textAbout} />
      <Line />
      <Filters />
      <Products />
    </>
  );
}
 
export default Coffee;