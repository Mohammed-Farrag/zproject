
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addNewItem(state,  { payload }) {    //send product in function as payload

            const itemExist = state?.items?.findIndex(
                (i) => i?.id == payload.id
            );

            if (-1 == itemExist) {

                const items = [...state.items, payload];
                const totalQuantity = state.totalQuantity + payload.quantity;
                const Price = +payload.price * payload.quantity;

                state = { 
                    ...state, 
                    items,
                    totalQuantity,
                    totalPrice : state.totalPrice + Price
                 };
                localStorage.setItem('cart', JSON.stringify(state));
                return state;
            } else {

                const Price = +payload.price * payload.quantity;
                
                state.items.map((i) => {
                    if (i?.id == payload?.id) {
                        i.quantity += payload.quantity;
                    }
                    return i;
                });
                const totalQuantity = state.totalQuantity + payload.quantity;

                state = {
                    ...state,
                    totalQuantity,
                    totalPrice: state.totalPrice + Price
                }

                localStorage.setItem('cart', JSON.stringify(state));
                return state;
            }
        },
        increaseOneItem(state, { payload }) {  //send product id in function as payload
            state.items.map((i) => {
                if (i?.id == payload) {
                    i.quantity++;
                    return i;
                }
            });

            localStorage.setItem('cart', JSON.stringify(state));
            return state;
        },
        decreaseOneItem(state, { payload }) {   //send product id in function as payload
            const item = state.items.find(
                (i) => i?.id == payload
            ) ;
            const itemIndex = state.items.findIndex(
                (i) => i?.id == payload
            );
            if (item.quantity > 1) {
                state.items.map((i) => {
                    if (i?.id == payload) {
                        i.quantity--;
                        return i;
                    }
                });
            } else {
                state.items.splice(itemIndex, 1);
            }

            localStorage.setItem('cart', JSON.stringify(state));
            return state;
        },
    },
    
});

export const {addNewItem, decreaseOneItem, increaseOneItem } =  cartSlice.actions;
export default cartSlice.reducer;
