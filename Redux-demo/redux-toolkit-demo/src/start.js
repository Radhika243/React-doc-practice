import store from './app/store';
import cakeActions from './features/cakes/cakeSlice';
console.log('Initial state',store.getState());
store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(cakeActions.orderedCake())
store.dispatch(cakeActions.orderedCake())
store.dispatch(cakeActions.orderedCake())
store.dispatch(cakeActions.restockCake(2))
