import { createSlice } from "@reduxjs/toolkit"
import { detailedInformation, fetchCampers } from "./operations.js"

const handlePending = (state) => {
  state.loading = true
}

const handleRejected = (state) => {
  state.loading = false
}

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    detail: {},
    loading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(detailedInformation.pending, handlePending)
      .addCase(detailedInformation.fulfilled, (state, action) => {
        state.loading = false
        state.detail = action.payload
      })
      .addCase(detailedInformation.rejected, handleRejected),
})

export const campersReducer = camperSlice.reducer
