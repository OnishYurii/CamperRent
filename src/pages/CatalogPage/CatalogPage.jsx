import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCampers } from "../../redux/operations"
import { selectCampersItems } from "../../redux/selectors"
import { CampersList } from "../../components/CampersList/CampersList"
import css from "./CatalogePage.module.css"

export const CatalogPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCampersItems)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  return <div className={css.page}>{items.length > 0 && <CampersList />}</div>
}
