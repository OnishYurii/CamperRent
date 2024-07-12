import { createSlice } from "@reduxjs/toolkit"

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

export const favoriteReducer = favoriteSlice.reducer
export const { addFavorite, removeFavorite } = favoriteSlice.actions
