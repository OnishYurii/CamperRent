import css from "./CamperCard.module.css"
import defaultIMG from "./default_IMG.jpg"
import Image from "../../image/sprite.svg"
import { useDispatch, useSelector } from "react-redux"
import { selectFavoriteItems } from "../../redux/favorite/selectors"
import { addFavorite, removeFavorite } from "../../redux/favorite/favoriteSlice"

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const CamperCard = ({ item, isFavorite }) => {
  const favoriteItems = useSelector(selectFavoriteItems)
  const favoriteItem = favoriteItems.some((fav) => fav._id === item._id)
  const dispatch = useDispatch()

  const reversedLocation = item.location.split(", ").reverse().join(", ")
  const image =
    item.gallery && item.gallery.length > 0 ? item.gallery[0] : defaultIMG
  const formattedPrice = item.price.toFixed(2)

  const imgClassName = `${css.img} ${isFavorite ? css.favoriteIMG : ""}`
  const cardClassName = `${css.camperCard} ${
    isFavorite ? css.favCamperCard : ""
  }`

  const toggleFavorite = () => {
    if (favoriteItem) {
      dispatch(removeFavorite(item))
    } else {
      dispatch(addFavorite(item))
    }
  }

  return (
    <div className={cardClassName}>
      <img src={image} alt={item.name} className={imgClassName} />
      <div>
        <div className={css.wrapForTitle}>
          <h2 className={css.titleText}>{item.name}</h2>
          <div className={css.wrapForPrice}>
            <p className={css.titleText}>&euro;{formattedPrice}</p>
            <button
              type="button"
              className={css.favBtn}
              onClick={toggleFavorite}
            >
              {favoriteItem ? (
                <svg width="24" height="24">
                  <use href={`${Image}#icon-favorite-add`} />
                </svg>
              ) : (
                <svg className={`${css.iconSVGFav}`} width="24" height="24">
                  <use href={`${Image}#icon-favorite`} />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={css.wrapForReview}>
          <p className={css.reviewText}>
            <svg width="16" height="16">
              <use href={`${Image}#icon-star`} />
            </svg>
            {item.rating}({item.reviews.length} Reviews)
          </p>
          <p className={css.locationText}>
            <svg className={`${css.iconSVG}`} width="16" height="16">
              <use href={`${Image}#icon-location`} />
            </svg>
            {reversedLocation}
          </p>
        </div>
        <p className={css.description}>{item.description}</p>

        <ul className={css.list}>
          <li>
            <svg width="20" height="20">
              <use href={`${Image}#icon-adults`} />
            </svg>
            {item.adults} adults
          </li>
          <li>
            <svg className={`${css.iconSVG}`} width="20" height="20">
              <use href={`${Image}#icon-transmission`} />
            </svg>
            {capitalizeFirstLetter(item.transmission)}
          </li>
          <li>
            <svg width="20" height="20">
              <use href={`${Image}#icon-petrol`} />
            </svg>
            {capitalizeFirstLetter(item.engine)}
          </li>
          {item.details.kitchen > 0 && (
            <li>
              <svg className={`${css.iconSVG}`} width="20" height="20">
                <use href={`${Image}#icon-kitchen`} />
              </svg>
              Kitchen
            </li>
          )}
          <li>
            <svg className={`${css.iconSVG}`} width="20" height="20">
              <use href={`${Image}#icon-beds`} />
            </svg>
            {item.details.beds} beds
          </li>
          {item.details.airConditioner > 0 && (
            <li>
              <svg width="20" height="20">
                <use href={`${Image}#icon-ac`} />
              </svg>
              AC
            </li>
          )}
        </ul>

        <button type="button" className={css.button}>
          Show more
        </button>
      </div>
    </div>
  )
}
