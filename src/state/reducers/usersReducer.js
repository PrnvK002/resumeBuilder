import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const getUserData = createAsyncThunk('users/popular',async(page,{rejectWithValue})=>{
    try{
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        console.log(response);
        return response.data;   
    }catch(err){
        return rejectWithValue(err.response.data);
    }
});

const userReducer = createSlice({
    name : 'users',
    initialState : {
        userData : [],
        loading : false,
        error : '' 
    },
    extraReducers : {
        [getUserData.fulfilled] : (state,action) => {
            state.loading = false;
            state.userData = action.payload.data;
        },
        [getUserData.pending] : (state,action) => {
            state.loading = true;
        },
        [getUserData.rejected]:(state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export default userReducer.reducer;