import {BUY_ICECREAM} from "./IceCreamTypes"

const initialIceCream = {
    noOfIceCream : 20
}

const iceCreamReducer = (state=initialIceCream,action) =>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                noOfIceCream:state.noOfIceCream - 1
            }

        default:
            return state
    }
}

export default iceCreamReducer;