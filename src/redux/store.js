import { configureStore } from "@reduxjs/toolkit"
import { campersReducer } from "./camper/camperSlice"
import { favoriteReducer } from "./favorite/favoriteSlice"

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorite: favoriteReducer,
  },
})
