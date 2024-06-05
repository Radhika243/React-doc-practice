import {BUY_CAKE} from "./CakeTypes"

const initialCake = {
    noOfCakes:10
}

const cakeReducer = (state=initialCake,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                noOfCakes:state.noOfCakes - 1
            }
        default:
            return state
    }
}

export default cakeReducer; 