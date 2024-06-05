const {createStore,applyMiddleware} = require('redux');
const axios = require('axios');
const {thunk} = require('redux-thunk');//return function instead of a object return dispatch in getAllUsers
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const initialState = {
    loading:true,
    users:[],
    error:''
}

//action creators
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
        type: FETCH_USERS_FAILURE,
        payload:error
        
    }
}

function getAllUsers(){//returns function
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users = response.data.map((user)=>user.id);
            dispatch(fetchUsersSuccess(users))
        }).catch((error)=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        // default:
        //     return state
    }
}

const store = createStore(reducer,applyMiddleware(thunk));
console.log('Initial render',store.getState());
store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(getAllUsers())
store.dispatch(getAllUsers())
