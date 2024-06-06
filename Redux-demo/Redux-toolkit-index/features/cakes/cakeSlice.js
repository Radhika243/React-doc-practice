const {createSlice}=require('@reduxjs/toolkit');

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;