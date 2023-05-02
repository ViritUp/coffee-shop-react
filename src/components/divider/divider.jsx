import './divider.scss'
import dividerWhite from '../../img/svg/divider-beans-white.svg'
import dividerBlack from '../../img/svg/divider-beans-black.svg'

const Divider = ({color}) => {
  return ( 
    <img className="divider" src={color === 'black' ? dividerBlack : dividerWhite} alt="divider beans" />
  );
}
 
export default Divider;