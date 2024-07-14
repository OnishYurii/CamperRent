import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCampers } from "../../redux/camper/operations"
import { CampersList } from "../../components/CampersList/CampersList"
import css from "./CatalogePage.module.css"
import { Filters } from "../../components/Filters/Filters"
import { selectFilteredCampers } from "../../redux/filters/selectors"

export const CatalogPage = () => {
  const dispatch = useDispatch()
  const filteredItems = useSelector(selectFilteredCampers)
  const [visibleItems, setVisibleItems] = useState(4)

  useEffect(() => {
    dispatch(fetchCampers())
  }, [dispatch])

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4)
  }

  return (
    <div className={css.page}>
      <Filters />
      <div className={css.wrapForList}>
        {filteredItems.length > 0 && (
          <CampersList items={filteredItems.slice(0, visibleItems)} />
        )}
        {visibleItems < filteredItems.length && (
          <button className={css.loadMoreButton} onClick={handleLoadMore}>
            Load More
          </button>
        )}
      </div>
    </div>
  )
}
