const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const axios = require('axios');
const {createStore,applyMiddleware}=require('redux');
const {thunk} = require('redux-thunk');//defines async action creators and returns a dispatch function while dispatching async functions

function fetchUsersRequest(){
    return{
        type:FETCH_USERS_REQUEST
    }
}

function fetchUsersSuccess(users){
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

function fetchUsersFailure(error){
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

function fetchAllUsers(){
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            //array of users
            const users = resp.data.map((user)=>user.id);
            dispatch(fetchUsersSuccess(users));
        })
        .catch((err)=>{
            //error
            const error = err.message;
            dispatch(fetchUsersFailure(error))
        })
    }
}

const initialState = {
    loading:true,
    users:[],
    error:''
}
const reducerUser = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading:false,
                users : action.payload,
                error:''
            }
        
            case FETCH_USERS_FAILURE:
                return{
                    loading:false,
                    users:[],
                    error:action.payload
                }
            default:
                return state
    }
}

const store = createStore(reducerUser,applyMiddleware(thunk));
console.log('Initial state',store.getState());
store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(fetchAllUsers())