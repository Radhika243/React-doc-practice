import {FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS} from "./UserTypes";
import axios from "axios";

export function fetchUsersRequest(){
    return{
        type:FETCH_USERS_REQUEST
    }
}

export function fetchUsersSuccess(users){
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

export function fetchUsersFailure(error){
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export function fetchAllUsers(){
    return (dispatch) =>{
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            const users = resp.data;
            dispatch(fetchUsersSuccess(users));
        }).catch((error)=>{
            const err = error.message;
            dispatch(fetchUsersFailure(err));
        })
    }
}

