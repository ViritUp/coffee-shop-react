import {NavLink} from 'react-router-dom'

import './button.scss'

const Button = ({children, link}) => {
  return (  
    <NavLink to={link} className="btn-outline">
      {children}
    </NavLink>
  );
}
 
export default Button;