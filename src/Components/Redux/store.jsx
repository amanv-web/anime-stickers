import { configureStore } from '@reduxjs/toolkit'
import { addcart } from './slice/addcart'

export const store = configureStore({
  reducer: { 
    updatecart:addcart,
  },
})

export default store