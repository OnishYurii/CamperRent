import { createSlice } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import storage from "redux-persist/lib/storage"

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload)
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      )
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions

const favoritePersistConfig = {
  key: "favorite",
  storage,
}

export const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteSlice.reducer
)
