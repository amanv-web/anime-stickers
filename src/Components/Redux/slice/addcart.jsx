import { createSlice } from '@reduxjs/toolkit'



export const addcart = createSlice({
  
  initialState : 0,
  name: 'addcart',
  reducers: {
   increment: (state) => state + 1,
  decrement: (state) =>  state + 1,

  }})
// Action creators are generated for each case reducer function
export const { increment, decrement } = addcart.actions

export default addcart.reducer