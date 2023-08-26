import headerLogo from '../images/header.svg';

export default function Header() {
  return(
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="логотип"/>
    </header>
  )
}