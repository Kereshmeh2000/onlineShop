import { createSlice } from "@reduxjs/toolkit";

const singleProduct = createSlice ({
    name : 'singleProduct',
    initialState: [],
    reducers : {
        show: (state, action) => {
            state.push(action.payload);
        },
        reset:(state, action) => {
            state = action.payload
        }
    }
})


export const { show ,reset} = singleProduct.actions;
export default singleProduct.reducer;