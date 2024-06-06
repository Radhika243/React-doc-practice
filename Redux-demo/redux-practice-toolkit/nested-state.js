const { createStore,applyMiddleware} = require("redux");
const produce = require("immer").produce;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

//applyMiddleware --> middleware extends redux with custom functionality for logging, handling async tasks and crash reporting. It is the third party for dispatching an action @ the moment it reaches the reducer

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 Main St",
    city: "Boston",
    state: "MA",
  },
};

const STREET_UPDATED = "STREET_UPDATED";
const CITY_UPDATED = "CITY_UPDATED";
function streetUpdate(street) {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
}

function cityUpdate(city){
    return{
        type:CITY_UPDATED,
        payload:city
    }
}

const reducerOne = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload,
        },
      };
    // return produce(state,(draft)=>{
    //     draft.address.street = action.payload
    // })

    case CITY_UPDATED:
        // return{
        //     ...state,
        //     address:{
        //         ...state.address,
        //         city:action.payload
        //     }
        // }
        return produce(state,(draft)=>{
            draft.address.city=action.payload
        })
    default:
      return state;
  }
};

const store = createStore(reducerOne,applyMiddleware(logger));
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(streetUpdate("456 Elm St"));
store.dispatch(cityUpdate('Ayodhya Road'))
unsubscribe();
