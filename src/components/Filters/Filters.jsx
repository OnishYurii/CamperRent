import css from "./Filters.module.css"
import Image from "../../image/sprite.svg"
import { useState } from "react"

export const Filters = () => {
  const [inputValue, setInputValue] = useState("")

  return (
    <form className={css.form}>
      <label className={css.labelForInput}>
        Location
        <div className={css.inputWrapper}>
          <svg
            className={`${css.iconSVGLocation} ${
              inputValue ? css.iconSVGActive : ""
            }`}
            width="18"
            height="20"
          >
            <use href={`${Image}#icon-location`} />
          </svg>
          <input
            type="text"
            name="location"
            placeholder="City"
            className={css.input}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </label>
      <p className={css.filtersText}>Filters</p>
      <fieldset className={css.fieldsetForCheckbox}>
        <legend className={css.legend}>Vehicle equipment</legend>
        <ul className={css.listOfCheckbox}>
          <li>
            <label className={css.labelForCheckbox}>
              <input type="checkbox" name="equipment" value="freezer" />
              <span className={css.customCheckbox}>
                <svg className={`${css.iconSVGCommon}`} width="32" height="32">
                  <use href={`${Image}#icon-Freezer`} />
                </svg>
                Freezer
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input type="checkbox" name="equipment" value="microwave" />
              <span className={css.customCheckbox}>
                <svg className={`${css.iconSVGCommon}`} width="32" height="32">
                  <use href={`${Image}#icon-Microwave`} />
                </svg>
                Microwave
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input type="checkbox" name="equipment" value="tv" />
              <span className={css.customCheckbox}>
                <svg className={`${css.iconSVGCommon}`} width="32" height="32">
                  <use href={`${Image}#icon-TV`} />
                </svg>
                TV
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input type="checkbox" name="equipment" value="cd" />
              <span className={css.customCheckbox}>
                <svg className={`${css.iconSVGCommon}`} width="32" height="32">
                  <use href={`${Image}#icon-CD`} />
                </svg>
                CD
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input type="checkbox" name="equipment" value="shower/wc" />
              <span className={css.customCheckbox}>
                <svg className={`${css.iconSVGCommon}`} width="32" height="32">
                  <use href={`${Image}#icon-Shower`} />
                </svg>
                Shower/WC
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input type="checkbox" name="equipment" value="gas" />
              <span className={css.customCheckbox}>
                <svg className={`${css.iconSVGCommon}`} width="32" height="32">
                  <use href={`${Image}#icon-Gas`} />
                </svg>
                Gas
              </span>
            </label>
          </li>
        </ul>
      </fieldset>
      <button type="submit" className={css.searchBtn}>
        Search
      </button>
    </form>
  )
}
