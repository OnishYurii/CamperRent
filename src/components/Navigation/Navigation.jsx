import { NavLink } from "react-router-dom"
import css from "./Navigation.module.css"
import clsx from "clsx"
import { useSelector } from "react-redux"
import { selectFavoriteItems } from "../../redux/favorite/selectors"
import { useEffect, useState } from "react"

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active)
}

export const Navigation = () => {
  const items = useSelector(selectFavoriteItems)
  const [favoriteCount, setFavoriteCount] = useState(0)

  useEffect(() => {
    setFavoriteCount(items.length)
  }, [items])

  return (
    <nav className={css.navList}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
      <NavLink to="/favorites" className={buildLinkClass}>
        Favorites{" "}
        {favoriteCount > 0 && (
          <span className={css.badge}>+{favoriteCount}</span>
        )}
      </NavLink>
    </nav>
  )
}
