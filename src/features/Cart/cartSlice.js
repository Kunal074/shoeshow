import { createSlice } from "@reduxjs/toolkit";

const initialState = {items : [], total: 0}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart : (state, action) =>{
            state.items.push(action.payload)
            state.total += action.payload.newPrice
        }
    }
})
export default cartSlice.reducer
export const {addToCart} = cartSlice.actions