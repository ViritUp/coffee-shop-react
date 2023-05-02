import Header from "../components/header/header";
import AboutSmth from "../components/about-smth/about-smth";
import Line from "../components/line/line";
import Products from "../components/products/products";

import headerImg from '../img/bgs/pleasure-header-bg.jpg'
import goodsPhoto from '../img/photos/goods-photo.jpg'

const Pleasure = () => {
  const textAbout = <>
    <p>Our coffee is the freshest and highest quality, period. We proudly use only the freshest, premium beans handpicked right from the farm and roasted daily in our own artisan roastery.</p>
    <p>When you buy our coffee, you're buying fresh-roasted, handcrafted quality. Every bag tastes as good as the day it was roasted thanks to our passion for amazing coffee and commitment to delivery freshness.</p>
  </>
  return (  
    <>
      <Header 
        img={headerImg} 
        title="For your pleasure" />
      <AboutSmth
        img={goodsPhoto}
        title="About our goods"
        text={textAbout} />
      <Line />
      <Products />
    </>
  );
}
 
export default Pleasure;