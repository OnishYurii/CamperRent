import css from "./Filters.module.css"
import Image from "../../image/sprite.svg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterCampers } from "../../redux/filters/filtersSlice"

export const Filters = () => {
  const [inputValue, setInputValue] = useState("")
  const [selectedType, setSelectedType] = useState(null)
  const dispatch = useDispatch()

  const handleTypeChange = (e) => {
    const newValue = e.target.value

    if (newValue === selectedType) {
      setSelectedType(null)
    } else {
      setSelectedType(newValue)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const formData = {
      location: form.location.value,
      equipment: Array.from(form.equipment)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),
      vehicleType: form.type.value,
    }

    dispatch(filterCampers(formData))
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
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
        <ul className={css.listCommon}>
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
              <input type="checkbox" name="equipment" value="TV" />
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
              <input type="checkbox" name="equipment" value="CD" />
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
              <input type="checkbox" name="equipment" value="shower" />
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
      <fieldset className={css.fieldsetForRadio}>
        <legend className={css.legend}>Vehicle type</legend>
        <ul className={css.listCommon}>
          <li>
            <label className={css.labelForCheckbox}>
              <input
                type="radio"
                name="type"
                value="panelTruck"
                onClick={handleTypeChange}
                onChange={handleTypeChange}
                checked={selectedType === "panelTruck"}
              />
              <span className={css.customCheckbox}>
                <svg width="40" height="28">
                  <use href={`${Image}#icon-Van`} />
                </svg>
                Van
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input
                type="radio"
                name="type"
                value="fullyIntegrated"
                onClick={handleTypeChange}
                onChange={handleTypeChange}
                checked={selectedType === "fullyIntegrated"}
              />
              <span className={css.individualRadiobox}>
                <svg width="40" height="28">
                  <use href={`${Image}#icon-Fully`} />
                </svg>
                Fully Integrated
              </span>
            </label>
          </li>
          <li>
            <label className={css.labelForCheckbox}>
              <input
                type="radio"
                name="type"
                value="alcove"
                onClick={handleTypeChange}
                onChange={handleTypeChange}
                checked={selectedType === "alcove"}
              />
              <span className={css.customCheckbox}>
                <svg width="40" height="28">
                  <use href={`${Image}#icon-Alcove`} />
                </svg>
                Alcove
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
