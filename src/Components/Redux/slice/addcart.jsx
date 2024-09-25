import { createSlice } from '@reduxjs/toolkit'
 


export const addcart = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {
    add(state, action) {
      const alreadyExist = state.find((item) => item.id === action.payload.id);
      if (alreadyExist) {
        action.payload.quantity +=1
       
      } else {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = addcart.actions;

export default addcart.reducer;
