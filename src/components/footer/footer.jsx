import {NavLink} from 'react-router-dom'

import Divider from "../divider/divider";

import './footer.scss'

const Footer = () => {
  return (  
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-list">
            <li className="footer-list__item logo">
              <NavLink to="/" className="footer-list__link">
                Coffee house
              </NavLink>
            </li>
            <li className="footer-list__item">
              <NavLink to="/coffee" className="footer-list__link">
                Our coffee
              </NavLink>
            </li>
            <li className="footer-list__item">
              <NavLink to="/pleasure" className="footer-list__link">
                For your pleasure
              </NavLink>
            </li>     
          </div>
          <Divider color='black' />
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;