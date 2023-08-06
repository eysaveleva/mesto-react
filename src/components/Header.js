import HeaderLogo from '../images/header.svg';

function Header() {
  return(
    <header className="header">
      <img className="header__logo" src={HeaderLogo} alt="логотип"/>
    </header>
  )
}

export default Header;