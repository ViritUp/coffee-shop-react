import Divider from '../divider/divider';

import './about-smth.scss'

const AboutSmth = ({img, title, text}) => {
  return (  
    <section className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-img">
            <img src={img} alt={title} />
          </div>
          <div className="about-content">
            <h2 className="about__title">{title}</h2>
            <Divider color="black" />
            <div className="about-text">
              {text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default AboutSmth;
