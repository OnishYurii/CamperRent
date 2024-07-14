import { createSelector } from "@reduxjs/toolkit"
import { selectCampersItems } from "../camper/selectors"

export const selectFilter = (state) => state.filters.value

export const selectFilteredCampers = createSelector(
  [selectFilter, selectCampersItems],
  (filter, campers) => {
    const isFilterEmpty =
      (!filter.location || filter.location.trim() === "") &&
      (!filter.equipment || filter.equipment.length === 0) &&
      (!filter.vehicleType || filter.vehicleType.trim() === "")

    if (isFilterEmpty) {
      return campers
    }

    return campers.filter((camper) => {
      if (filter.location && filter.location.trim() !== "") {
        const camperLocationParts = camper.location.split(", ")
        const city = camperLocationParts[1]
          ? camperLocationParts[1].toLowerCase()
          : ""
        if (!city.includes(filter.location.toLowerCase())) {
          return false
        }
      }

      if (filter.equipment && filter.equipment.length > 0) {
        const hasAllEquipment = filter.equipment.every(
          (item) => camper.details[item] && camper.details[item] !== 0
        )
        if (!hasAllEquipment) {
          return false
        }
      }

      if (
        filter.vehicleType &&
        filter.vehicleType.trim() !== "" &&
        camper.form !== filter.vehicleType
      ) {
        return false
      }
      return true
    })
  }
)
