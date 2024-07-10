import { useSelector } from "react-redux"
import { selectCampersItems } from "../../redux/selectors"
import { CamperCard } from "../CamperCard/CamperCard"

export const CampersList = () => {
  const items = useSelector(selectCampersItems)

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>
          <CamperCard item={item} />
        </li>
      ))}
    </ul>
  )
}
