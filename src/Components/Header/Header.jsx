import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <section className="header">
      <h1 className="header__heading">Alan V. Cashman</h1>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" class="nav__link">
            Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/projects" class="nav__link">
            Projects
            </Link>
          </li>
          <li className="nav__item" >
            <Link to="/contact" class="nav__link">
            Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}
