import './header.scss'

const Header = ({img, title}) => {
  return (  
    <header className="header" style={{backgroundImage: `url(${img})`}}>
      <div className="container">
        <h1 className="header__title">{title}</h1>
      </div>
    </header>
  );
}
 
export default Header;