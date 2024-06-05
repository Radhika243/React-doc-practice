import {connect} from "react-redux"
import buyIceCreams from "../Redux/ICeCream/IceCreamActions"

function IceCreamContainer(props){
    return (
        <div>
            <h2>NUMBER OF ICE CREAMS : {props.noOfIceCream}</h2>
            <button onClick={props.buyIceCreams}>BUY ICE</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        noOfIceCream:state.icecream.noOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCreams : ()=>dispatch(buyIceCreams())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)