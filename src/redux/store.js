import { configureStore } from "@reduxjs/toolkit"
import { campersReducer } from "./camperSlice"

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
})
