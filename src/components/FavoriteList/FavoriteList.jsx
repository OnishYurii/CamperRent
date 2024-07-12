import { useSelector } from "react-redux"
import { selectFavoriteItems } from "../../redux/favorite/selectors"
import css from "./FavoriteList.module.css"
import { CamperCard } from "../CamperCard/CamperCard"

export const FavoriteList = () => {
  const items = useSelector(selectFavoriteItems)

  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item._id}>
          <CamperCard item={item} isFavorite={true} />
        </li>
      ))}
    </ul>
  )
}
