import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <Link className="header__title" to="/users">
        Users Tasks Management
      </Link>
    </header>
  )
}

export default Header
