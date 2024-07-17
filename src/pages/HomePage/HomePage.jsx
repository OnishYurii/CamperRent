import css from "./HomePage.module.css"
import Image from "../../image/homeIMG.webp"
import { AiTwotoneFileAdd } from "react-icons/ai"
import { FcKey, FcSearch } from "react-icons/fc"
// import { ImShield } from "react-icons/im"
// import { GiTowTruck } from "react-icons/gi"
// import { RiSecurePaymentLine } from "react-icons/ri"
// import { MdOutlineSupportAgent } from "react-icons/md"

export const HomePage = () => {
  return (
    <div>
      <img src={Image} alt="CamperImage" className={css.img} />
      <div className={css.page}>
        <h2>How does it work?</h2>
        <ul className={css.listOfWork}>
          <li className={css.listWorkItem}>
            <FcSearch className={css.listWorkIcons} />
            <h3>1. Find a camping vehicle</h3>
            <p className={css.listWorkText}>
              Choose where and when you wish to pick up the vehicle.
            </p>
          </li>
          <li className={css.listWorkItem}>
            <AiTwotoneFileAdd className={css.listWorkIcons} />
            <h3>2. Send booking request</h3>
            <p className={css.listWorkText}>
              Send a booking request for the motorhome or caravan you want to
              rent.
            </p>
          </li>
          <li className={css.listWorkItem}>
            <FcKey className={css.listWorkIcons} />
            <h3>3.Check in</h3>
            <p className={css.listWorkText}>
              Finish the booking and check in when the time comes. Have a nice
              holiday!
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
