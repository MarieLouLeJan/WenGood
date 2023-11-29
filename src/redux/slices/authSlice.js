import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    expiresIn: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_USER (state, action) {
            state.isLoggedIn = action.payload.isLoggedIn;
            state.expiresIn = action.payload.expireTime;
        },

    }
})

export const { SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;