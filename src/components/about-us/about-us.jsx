import Divider from '../divider/divider';
import './about-us.scss'

const AboutUs = () => {
  return (  
    <section className="about-us">
      <div className="container">
        <div className="about-us-wrapper">
          <h2 className="about-us__title">About Us</h2>
          <Divider color='black' />
          <div className="about-us__text">
            <p>We are a team of true coffee connoisseurs who professionally roast the best Arabica beans. Every day we individually approach the roasting of different varieties of coffee, taking into account their unique properties. Our experts have selected the optimal recipe for each variety, which is able to maximize the aroma and flavor palette of grain.</p>
            <p>The Coffee House company is equipped with roasters and professional coffee grinders. We use multi-stage control of coffee bean roasting stability. Roasters (special roasting ovens) are equipped with minicomputers that set specific roasting parameters for each type of coffee: temperature, roasting time, bean mixing speed, and much more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default AboutUs;