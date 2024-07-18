import css from "./HomePage.module.css"
import Image from "../../image/homeIMG.webp"
import { AiTwotoneFileAdd } from "react-icons/ai"
import { FcKey, FcSearch } from "react-icons/fc"
import { LiaSearchSolid } from "react-icons/lia"
import { CiDiscount1 } from "react-icons/ci"
import { RxTimer } from "react-icons/rx"
import { ImShield } from "react-icons/im"
import { GiTowTruck } from "react-icons/gi"
import { RiSecurePaymentLine } from "react-icons/ri"
import { MdOutlineSupportAgent, MdLocalPhone, MdEmail } from "react-icons/md"

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

        <div className={css.wrapForPerksLists}>
          <div className={css.wrapForLeftPerks}>
            <h2>Safe and secure</h2>
            <ul className={css.listOfPerksLeft}>
              <li className={css.itemOfPerks}>
                <ImShield className={css.listWorkIcons} />
                <div>
                  <h3>All-round insurance</h3>
                  <p className={css.listPerksText}>
                    Sit back, and enjoy your holiday with our all-round
                    insurance.
                  </p>
                </div>
              </li>
              <li className={css.itemOfPerks}>
                <GiTowTruck className={css.listWorkIcons} />
                <div>
                  <h3>Roadside assistance</h3>
                  <p className={css.listPerksText}>
                    If something were to happen on the road, our road assistance
                    helps you, 24/7.
                  </p>
                </div>
              </li>
              <li className={css.itemOfPerks}>
                <RiSecurePaymentLine className={css.listWorkIcons} />
                <div>
                  <h3>Secure payments</h3>
                  <p className={css.listPerksText}>
                    When you rent via us, you get access to our secure payment
                    system.
                  </p>
                </div>
              </li>
              <li className={css.itemOfPerks}>
                <MdOutlineSupportAgent className={css.listWorkIcons} />
                <div>
                  <h3>Support when you need it</h3>
                  <p className={css.listPerksText}>
                    We are here if you need support. We do our best to solve all
                    types of problems that may appear. Just call us.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className={css.wrapForRightPerks}>
            <h2>Make it easy for yourself!</h2>
            <ul className={css.listOfPerksRight}>
              <li className={css.itemOfPerks}>
                <LiaSearchSolid className={css.listWorkIcons} />
                <div>
                  <h3>Easier to find motorhome</h3>
                  <p className={css.listPerksText}>
                    We gather available motorhomes and caravans in Ukraine. Our
                    site make it easy to find the perfect vehicle for your trip
                    - even during the high season.
                  </p>
                </div>
              </li>
              <li className={css.itemOfPerks}>
                <CiDiscount1 className={css.listWorkIcons} />
                <div>
                  <h3>Rent at a lower price</h3>
                  <p className={css.listPerksText}>
                    To rent motorhome and caravan via Journey Wheels is an
                    affordable alternative. Generally it is approximately 40%
                    cheaper to rent from private individuals.
                  </p>
                </div>
              </li>
              <li className={css.itemOfPerks}>
                <RxTimer className={css.listWorkIcons} />
                <div>
                  <h3>Save time</h3>
                  <p className={css.listPerksText}>
                    Our support team responds to your request instantly and
                    helps you rent a motorhome in the shortest possible time.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={css.wrapForContacts}>
          <h2>Do you have any questions?</h2>
          <ul className={css.listOfContacts}>
            <li className={css.itemOfContacts}>
              <h3 className={css.h3ForContacts}>
                Call us <MdLocalPhone className={css.iconsForContacts} />
              </h3>
              <a
                href="tel:+3809322211100"
                aria-label="call us"
                className={css.contactLink}
              >
                +3809322211100
              </a>
            </li>
            <li className={css.itemOfContacts}>
              <h3 className={css.h3ForContacts}>
                Email us <MdEmail className={css.iconsForContacts} />
              </h3>
              <a
                href="mailto: journey-wheel@gmail.com"
                aria-label="send an email "
                className={css.contactLink}
              >
                journey-wheel@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
