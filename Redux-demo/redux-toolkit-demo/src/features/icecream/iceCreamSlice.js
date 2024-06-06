import {createSlice} from '@reduxjs/toolkit';
import { orderedCake , restockCake } from '../cakes/cakeSlice';

const initialIceCreamState = {
    numberOfIceCreams : 50
}
const iceCreamSlice = createSlice({
    name:'icecream',
    initialState:initialIceCreamState,
    reducers:{
        orderedicecreams:(state,action)=>{
            state.numberOfIceCreams--;
        },
        restockicecreams:(state,action)=>{
            state.numberOfIceCreams +=action.payload;
        }
    },
    //adding cake in the ice-cream,
    extraReducers:(builder)=>{
        builder.addCase(orderedCake,(state,action)=>{
            state.numberOfIceCreams --;
        })
    }
    
});

export default iceCreamSlice.reducer;
export const {orderedicecreams,restockicecreams} = iceCreamSlice.actions;