import { CamperCard } from "../CamperCard/CamperCard"
import css from "./CampersList.module.css"

export const CampersList = ({ items }) => {
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
