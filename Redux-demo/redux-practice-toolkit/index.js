const {createStore,applyMiddleware,bindActionCreators, combineReducers} = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const CAKE_ORDERED = "CAKE_ORDERED";
const RESTOCK_CAKE = "RESTOCK_CAKE";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const RESTOCK_ICE_CREAM="RESTOCK_ICE_CREAM";

function cakeOrdered(){
    return{
        type:CAKE_ORDERED
    }
}

function restockCake(qty=1){
    return{
        type:RESTOCK_CAKE,
        payload:qty
    }
}

function iceCreamOrdered(){
    return{
        type:ICE_CREAM_ORDERED
    }
}

function restockIceCream(qty=1){
    return{
        type:RESTOCK_ICE_CREAM,
        payload:qty
    }
}

const initialCakeState = {
    noOfCakes:15,
    
}

const initialIceCreamState = {
    noOficeCreams : 40
}

const cakeReducers = (state=initialCakeState,action) =>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCakes:state.noOfCakes - 1
            }

        case RESTOCK_CAKE:
            return{
                ...state,
                noOfCakes : state.noOfCakes + action.payload
            }
        default:
            return state
    }
}

const iceCreamReducers = (state=initialIceCreamState,action)=>{
    switch(action.type){
        case ICE_CREAM_ORDERED:
            return{
                ...state,
                noOficeCreams : state.noOficeCreams - 1
            }

        case RESTOCK_ICE_CREAM:
            return{
                ...state,
                noOficeCreams : state.noOficeCreams + action.payload
            }

        default:
            return state
    }
}

const rootReducers = combineReducers({
    cake:cakeReducers,
    iceCream:iceCreamReducers
})
const store = createStore(rootReducers,applyMiddleware(logger));
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()));
// store.dispatch(cakeOrdered());
// store.dispatch(cakeOrdered());
// store.dispatch(cakeOrdered());
// store.dispatch(restockCake(1));
// store.dispatch(restockCake(2));
const actions = bindActionCreators({cakeOrdered,restockCake,iceCreamOrdered,restockIceCream},store.dispatch);
actions.cakeOrdered();
actions.cakeOrdered();
actions.cakeOrdered();
actions.restockCake(2);
actions.iceCreamOrdered();
actions.iceCreamOrdered();
actions.iceCreamOrdered();
actions.iceCreamOrdered();
actions.restockIceCream(4);
unsubscribe();