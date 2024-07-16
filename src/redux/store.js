import { configureStore } from "@reduxjs/toolkit"
import { campersReducer } from "./camper/camperSlice"
import { persistedFavoriteReducer } from "./favorite/favoriteSlice"
import { filtersReducer } from "./filters/filtersSlice"
import persistStore from "redux-persist/es/persistStore"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    favorite: persistedFavoriteReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
