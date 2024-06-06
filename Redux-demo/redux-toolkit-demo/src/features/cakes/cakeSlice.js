import {createSlice} from '@reduxjs/toolkit';

const initialCakeState = {
    numberOfCakes:40
}
const cakeSlice = createSlice({
    name:'cake',
    initialState:initialCakeState,
    reducers:{
        orderedCake: (state,action) =>{
            state.numberOfCakes--;
        },
        restockCake:(state,action) =>{
            state.numberOfCakes+=action.payload;
        }
    }
});

export default cakeSlice.reducer;
export const {orderedCake,restockCake} = cakeSlice.actions;