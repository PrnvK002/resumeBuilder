import { createSlice } from "@reduxjs/toolkit";

let profileDataFromStorage = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')) : {} ;

const profileReducer = createSlice({
    name:'resumeData',
    initialState:{
        profileData : profileDataFromStorage,
        success : false
    },
    reducers : {
        submitProfileData : (state,action) => {
            state.profileData = action.payload;
            localStorage.setItem('profileData',JSON.stringify(action.payload));
            state.success = true;
        },
        resetSuccess : (state,action) => {
            state.success = false;
        }
    }
});

export const { submitProfileData , resetSuccess } = profileReducer.actions;

export default profileReducer.reducer;