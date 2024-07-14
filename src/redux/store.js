import { configureStore } from "@reduxjs/toolkit"
import { campersReducer } from "./camper/camperSlice"
import { favoriteReducer } from "./favorite/favoriteSlice"
import { filtersReducer } from "./filters/filtersSlice"

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorite: favoriteReducer,
    filters: filtersReducer,
  },
})
