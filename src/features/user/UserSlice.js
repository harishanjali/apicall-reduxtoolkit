import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  products: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios
    .get('https://satotest.araa.land/api/recent_assets?type=physical',{
    headers:{
      'X-API-KEY':'53fC26YCYeoNJWMxscaeW4ZaUmKyypovMRpcvNa29h9V'
    }}
    )
    .then(response => response.data.results.results)
})

const userSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer