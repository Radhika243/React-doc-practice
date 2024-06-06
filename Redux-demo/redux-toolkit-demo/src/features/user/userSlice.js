import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialUserState = {
    loading:false,
    users:[],
    error:''
}

//Generates pending, fulfilled,rejected states based on the specific states
export const fetchUsers = createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((resp)=>{
        return resp.data.map((user)=>user.id)
    })
})
const userSlice = createSlice({
    name:'user',
    initialState:initialUserState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading = false;
            state.users=action.payload;
            state.error=''
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.users=[];
            state.error=action.error.message
        })
    }
});

export default userSlice.reducer;
//export const {fetchUsers}=fetchUsers;