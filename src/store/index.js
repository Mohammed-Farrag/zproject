import { configureStore } from "@reduxjs/toolkit";
// import storage from 'redux-persist/lib/storage';

import cartSlice from "./CartSlice/CartSlice";


export const store = configureStore({
    reducer:{
        cartSlice,
    },
})
