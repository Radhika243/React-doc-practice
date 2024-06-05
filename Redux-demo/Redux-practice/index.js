const {createStore, combineReducers,applyMiddleware} = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM="BUY_ICECREAM";

function buyCake(){
    
    return{
        type:BUY_CAKE
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM
    }
}

const initialCakeState ={
    numOfCakes : 20
    
}

const initialIceCreamState = {
    numOfIceCream : 40
}
const reducer = (state=initialCakeState,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numOfCakes:state.numOfCakes - 1
            }
        // case BUY_ICECREAM:
        //     return{
        //         ...state,
        //         numOfIceCream:state.numOfIceCream - 1
        //     }

        default:
            return state
    }
}

const reducer2 = (state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream - 1
            }
        default:
            return state

    }
}

const rootReducer = combineReducers({
    cake:reducer,
    iceCream:reducer2
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('Initial render',store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state :',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe()