import Divider from '../divider/divider';
import Button from '../button/button';

import './hero.scss'

const Hero = () => {
  return ( 
    <section className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <h1 className="hero__title">Everything You Love About Coffee</h1>
          <Divider color='white' />
          <div className="hero-descr">
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
          </div>
          <Button link='/coffee'>More</Button>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;