import {configureStore} from '@reduxjs/toolkit';
import profileReducer from './reducers/profileReducer';
import usersReducer from './reducers/usersReducer';

export const store = configureStore({
    reducer : {
        profileReducer,
        usersReducer
    }
});