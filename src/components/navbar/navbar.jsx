import {NavLink} from 'react-router-dom'

import './navbar.scss'

const Navbar = () => {
  return (  
    <nav className="nav">
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-list__item logo">
            <NavLink to="/" className="nav-list__link">
              Coffee house
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/coffee" className="nav-list__link">
              Our coffee
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink to="/pleasure" className="nav-list__link">
              For your pleasure
            </NavLink>
          </li>          
        </ul>
      </div>
    </nav>
  );
}
 
export default Navbar;