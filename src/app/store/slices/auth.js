import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import { customHistory } from "../../../CustomBrowsertHistory";
import Cookies from 'universal-cookie';


// DEFINING THE INITIAL STATE:
const initialState = {
    userDetails: {},
    loader: {
        adminLoader: false,
        signupLoader: false,
        signinLoader: false,
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

export const asyncUserSignin = createAsyncThunk(
    "auth/asyncUserSignin",
    async (payload) => {
        const response = await api.post(`/signin`, payload);
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
            state.loader.signupLoader = true;
        });
        builder.addCase(asyncUserSignup.fulfilled, (state, { payload }) => {
            console.log(payload.status === 200)
            if (payload.status === 200) {
                customHistory.push("/sign-in");
            } else {
                state.serverError = payload.data.message
            }
            state.loader.signupLoader = false
        });
        builder.addCase(asyncUserSignup.rejected, (state, { payload }) => {
            state.loader.signupLoader = false
        });

        // User Signin

        builder.addCase(asyncUserSignin.pending, (state, { payload }) => {
            state.loader.signinLoader = true;
        });
        builder.addCase(asyncUserSignin.fulfilled, (state, { payload }) => {
            console.log(payload)
            const cookies = new Cookies();
            if (payload.status === 200 && payload.data.token) {
                cookies.set('authToken', payload.data.token);
                state.userDetails = payload.data
                customHistory.push("/");
            } else {
                state.serverError = payload.data.message
            }
            state.loader.signinLoader = false
        });
        builder.addCase(asyncUserSignin.rejected, (state, { payload }) => {
            state.loader.signinLoader = false
        });
    },
});

export const { setUserDetails } = authSlice.actions;
export const getUserDetails = (state) => state.auth.userDetails;
export const getServerError = (state) => state.auth.serverError;
export const getAuthLoader = (state) => state.auth.loader

export default authSlice.reducer;
