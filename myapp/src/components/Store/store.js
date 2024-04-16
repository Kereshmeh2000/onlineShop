import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart'
import singleProduct from './singleProduct';

export default configureStore({
  reducer: {
    cart : cartReducer,
    singleProduct: singleProduct,
  },
})
