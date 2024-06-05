import {connect} from "react-redux"
import buyCakes from "../Redux/CAkes/CakeActions"

function CakeContainer(props){
    return(
        <div>
            <h2>Number of Cakes: {props.noOfCakes}</h2>
            <button onClick={props.buyCakes}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.noOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCakes: () => dispatch(buyCakes())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)