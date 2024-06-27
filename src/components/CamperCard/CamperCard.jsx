import css from "./CamperCard.module.css"
import defaultIMG from "./default_IMG.jpg"

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
  const reversedLocation = location.split(", ").reverse().join(", ")
  const image = gallery && gallery.length > 0 ? gallery[0] : defaultIMG

  return (
    <div>
      <h2>{name}</h2>
      <p>&euro;{price}</p>
      <p>
        {rating}({reviews.length} Reviews)
      </p>
      <p>{reversedLocation}</p>
      <p className={css.description}>{description}</p>
      <ul>
        <li>{adults} adults</li>
        <li>{capitalizeFirstLetter(transmission)}</li>
        <li>{capitalizeFirstLetter(engine)}</li>
        {details.kitchen > 0 && <li>Kitchen</li>}
        <li>{details.beds} beds</li>
        {details.airConditioner > 0 && <li>AC</li>}
      </ul>
      <img src={image} alt={name} className={css.img} />
    </div>
  )
}
