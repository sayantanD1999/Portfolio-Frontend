import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axios";


// DEFINING THE INITIAL STATE:
const initialState = {
    userDetails: {},
    loader: {
        adminLoader: false,
    },
    msg: "",
    serverError: "",
};

export const asyncUserSignup = createAsyncThunk(
    "auth/asyncUserSignup",
    async (payload) => {
        const response = await api.post(`/signup`, payload);
        return response;
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.adminDetails = action.payload;
        },
    },
    extraReducers: (builder) => {
        // User Signup

        builder.addCase(asyncUserSignup.pending, (state, { payload }) => {

        });
        builder.addCase(asyncUserSignup.fulfilled, (state, { payload }) => {
            console.log(payload)
        });
        builder.addCase(asyncUserSignup.rejected, (state, { payload }) => {

        });
    },
});

export const { setUserDetails } = authSlice.actions;
export const getUserDetails = (state) => state.auth.userDetails;

export default authSlice.reducer;
