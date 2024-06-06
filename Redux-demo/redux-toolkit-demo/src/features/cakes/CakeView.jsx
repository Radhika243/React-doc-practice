import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {orderedCake, restockCake} from './cakeSlice';

const CakeView = () => {
    const numberOfCakes = useSelector(state=>state.cake.numberOfCakes);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes:{numberOfCakes}</h2>
      <button onClick={()=>dispatch(orderedCake())}>Order Cake</button>
      <button onClick={()=>dispatch(restockCake(3))}>Restock Cake</button>
    </div>
  )
}

export default CakeView
