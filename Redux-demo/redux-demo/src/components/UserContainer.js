import { fetchAllUsers } from "../Redux/User/UserActions";
import React,{useEffect} from "react";
import { connect } from "react-redux";

function UserContainer({userData,fetchAllUsers}){
    useEffect(()=>{
        fetchAllUsers();
    },[])
    
      return userData.loading?
      (<h2>{"LOADING"}</h2>)  :
      (userData.error)?(
        <h2>{"USER ERROR"}</h2>
      ):
      (
        <div>
            <h2>List of Users</h2>
            <div>
                {
                    userData &&
                    userData.users &&
                    userData.users.map((user)=>{
                        return <h4 key={user.id}>{user.username}-{user.address.city}</h4>
                    })
                }
            </div>
        </div>
      )
}

const mapStateToProps = state =>{
    return{
        userData:state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchAllUsers:()=>dispatch(fetchAllUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);