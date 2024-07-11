import { useSelector } from "react-redux"
import { selectCampersItems } from "../../redux/selectors"
import { CamperCard } from "../CamperCard/CamperCard"
import css from "./CampersList.module.css"

export const CampersList = () => {
  const items = useSelector(selectCampersItems)

  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item._id}>
          <CamperCard item={item} />
        </li>
      ))}
    </ul>
  )
}
