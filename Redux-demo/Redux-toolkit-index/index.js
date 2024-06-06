const store = require('./app/store');
const {fetchUsers}=require('./features/user/userSlice');
const cakeActions = require('./features/cakes/cakeSlice').cakeActions;
const icecreamActions = require('./features/icecream/iceCreamSlice').icecreamActions;

console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(cakeActions.orderedCake())
store.dispatch(cakeActions.orderedCake())
store.dispatch(cakeActions.orderedCake())
store.dispatch(cakeActions.restockCake(2))
store.dispatch(icecreamActions.orderedicecreams())
store.dispatch(icecreamActions.orderedicecreams())
store.dispatch(icecreamActions.orderedicecreams())
store.dispatch(icecreamActions.restockicecreams(3))
store.dispatch(fetchUsers())