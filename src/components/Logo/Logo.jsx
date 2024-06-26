import { Link } from "react-router-dom"
import css from "./Logo.module.css"
import icon from "../../../public/camper-van.svg"

export const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <img src={icon} alt="JourneyWheels Logo" width="60" height="60" />
      <div className={css.wrapLogo}>
        Journey<span className={css.span}>Wheels</span>
      </div>
    </Link>
  )
}
