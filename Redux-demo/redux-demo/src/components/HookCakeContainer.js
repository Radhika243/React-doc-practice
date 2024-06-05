import {useDispatch, useSelector} from "react-redux"
import buyCakes from "../Redux/CAkes/CakeActions";

function HookCakeContainer(){
    const noOfCakes = useSelector((state)=>state.cake.noOfCakes);
    const dispatch = useDispatch()
    return(
        <div>
            <h1>No of cakes -- {noOfCakes} </h1>
            <button onClick={()=>dispatch(buyCakes())}>BUY CAKE</button>
        </div>
    )
}

export default HookCakeContainer;