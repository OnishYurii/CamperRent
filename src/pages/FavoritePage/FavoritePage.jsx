import { useSelector } from "react-redux"
import { selectFavoriteItems } from "../../redux/favorite/selectors"
import { FavoriteList } from "../../components/FavoriteList/FavoriteList"
import css from "./FavoritePage.module.css"
import Image from "../../image/sprite.svg"
import { Link } from "react-router-dom"

export const FavoritesPage = () => {
  const items = useSelector(selectFavoriteItems)

  return (
    <div className={css.page}>
      {items.length > 0 ? (
        <FavoriteList />
      ) : (
        <div>
          <h2 className={css.title}>Your favorites list is empty</h2>
          <p className={css.text}>
            Add items to your favorites by clicking on the{" "}
            <svg className={`${css.iconSVGFav}`} width="24" height="24">
              <use href={`${Image}#icon-favorite`} />
            </svg>{" "}
            icon next to the items you like. They will appear here.
          </p>
          <div className={css.wrapForLink}>
            <Link to="/catalog" className={css.link}>
              Let&apos;s Try
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
