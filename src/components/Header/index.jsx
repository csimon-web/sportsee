import { Link } from 'react-router-dom'
import logo from '../../assets/logo512.png'
import '../../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="Sportsee" className="header__logo__picture" />
        <span className='header__logo__title'>SportSee</span>
      </Link>
      <nav className="header__nav">
        <Link to="/" className={`header__nav__nav_element`}>
          Accueil
        </Link>
        <Link
          to="/profil"
          className={`header__nav__nav_element`}
        >
          Profil
        </Link>
        <Link
          to="/reglage"
          className={`header__nav__nav_element`}
        >
          Réglage
        </Link>
        <Link
          to="/communaute"
          className={`header__nav__nav_element`}
        >
          Communauté
        </Link>
      </nav>
    </header>
  )
}

export default Header
