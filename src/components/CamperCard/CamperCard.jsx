import css from "./CamperCard.module.css"
import defaultIMG from "./default_IMG.jpg"
import Image from "../../image/sprite.svg"
import { useState } from "react"

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const CamperCard = ({
  item: {
    name,
    price,
    rating,
    reviews,
    location,
    description,
    adults,
    engine,
    transmission,
    details,
    gallery,
  },
}) => {
  const [favorite, setFavorite] = useState(false)

  const reversedLocation = location.split(", ").reverse().join(", ")
  const image = gallery && gallery.length > 0 ? gallery[0] : defaultIMG
  const formattedPrice = price.toFixed(2)

  const toggleFavorite = () => {
    setFavorite((prevState) => !prevState)
  }

  return (
    <div className={css.camperCard}>
      <img src={image} alt={name} className={css.img} />
      <div>
        <div className={css.wrapForTitle}>
          <h2 className={css.titleText}>{name}</h2>
          <div className={css.wrapForPrice}>
            <p className={css.titleText}>&euro;{formattedPrice}</p>
            <button
              type="button"
              className={css.favBtn}
              onClick={toggleFavorite}
            >
              {favorite ? (
                <svg width="24" height="24">
                  <use href={`${Image}#icon-favorite-add`} />
                </svg>
              ) : (
                <svg className={`${css.iconSVG}`} width="24" height="24">
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
            {rating}({reviews.length} Reviews)
          </p>
          <p className={css.locationText}>
            <svg className={`${css.iconSVG}`} width="16" height="16">
              <use href={`${Image}#icon-location`} />
            </svg>
            {reversedLocation}
          </p>
        </div>
        <p className={css.description}>{description}</p>

        <ul className={css.list}>
          <li>
            <svg width="20" height="20">
              <use href={`${Image}#icon-adults`} />
            </svg>
            {adults} adults
          </li>
          <li>
            <svg className={`${css.iconSVG}`} width="20" height="20">
              <use href={`${Image}#icon-transmission`} />
            </svg>
            {capitalizeFirstLetter(transmission)}
          </li>
          <li>
            <svg width="20" height="20">
              <use href={`${Image}#icon-petrol`} />
            </svg>
            {capitalizeFirstLetter(engine)}
          </li>
          {details.kitchen > 0 && (
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
            {details.beds} beds
          </li>
          {details.airConditioner > 0 && (
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
