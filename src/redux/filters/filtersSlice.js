import { createSlice } from "@reduxjs/toolkit"

const filtersSLice = createSlice({
  name: "filters",
  initialState: {
    value: {},
  },
  reducers: {
    filterCampers: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { filterCampers } = filtersSLice.actions
export const filtersReducer = filtersSLice.reducer
