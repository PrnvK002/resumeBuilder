import { createSlice } from "@reduxjs/toolkit";

const profileReducer = createSlice({
    name:'resumeData',
    initialState:{
        profileData : {}
    },
    reducers : {
        submitProfileData : (state,action) => {
            state.profileData = action.payload;
        }
    }
});

export const { submitProfileData } = profileReducer.actions;

export default profileReducer.reducer;