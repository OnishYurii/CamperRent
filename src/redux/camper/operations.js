import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

axios.defaults.baseURL = "https://65db19ef3ea883a152912442.mockapi.io"

export const fetchCampers = createAsyncThunk(
  "campers/fetchall",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/advert")
      return response.data
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message)
    }
  }
)

export const detailedInformation = createAsyncThunk(
  "campers/detailedInform",
  async (camperID, thunkAPI) => {
    try {
      const response = await axios.get(`/contacts/${camperID}`)
      return response.data
    } catch (er) {
      return thunkAPI.rejectWithValue(er.message)
    }
  }
)
