import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx"

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
}

export const Navigation = () => {
  return (
    <header className={css.navBar}>
      <nav>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={buildLinkClass}>
          Favorites
        </NavLink>
      </nav>
    </header>
  )
}
