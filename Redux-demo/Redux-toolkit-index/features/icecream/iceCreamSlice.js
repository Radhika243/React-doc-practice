const {createSlice}=require('@reduxjs/toolkit');
const cakeActions = require('../cakes/cakeSlice').cakeActions;

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
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.orderedCake,(state,action)=>{
            state.numberOfIceCreams --;
        })
    }
    
});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;