import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {orderedicecreams, restockicecreams} from './iceCreamSlice';

const IceCreamView = () => {
    const numberOfIceCreams = useSelector((state)=>state.icecream.numberOfIceCreams);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice creams:{numberOfIceCreams}</h2>
      <button onClick={()=>dispatch(orderedicecreams())}>Order ice cream</button>
      <button onClick={()=>dispatch(restockicecreams())}>Restock ice cream</button>
    </div>
  )
}

export default IceCreamView
