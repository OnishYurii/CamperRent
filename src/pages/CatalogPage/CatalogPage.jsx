import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCampers } from "../../redux/camper/operations"
import { selectCampersItems } from "../../redux/camper/selectors"
import { CampersList } from "../../components/CampersList/CampersList"
import css from "./CatalogePage.module.css"

export const CatalogPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCampersItems)
  const [visibleItems, setVisibleItems] = useState(4)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4)
  }

  return (
    <div className={css.page}>
      <div className={css.wrapForList}>
        {items.length > 0 && (
          <CampersList items={items.slice(0, visibleItems)} />
        )}
        {visibleItems < items.length && (
          <button className={css.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  )
}
