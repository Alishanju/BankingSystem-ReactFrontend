import { createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../services/AuthService";

import type { LoginRequest } from "../../types/LoginRequest";
import logger from "../../utils/logger";

export const loginUser = createAsyncThunk(

    "auth/login",

    async (

        request: LoginRequest,

        thunkAPI

    ) => {

        try {

            const response =

                await AuthService.login(request);
                logger.info(

"Login successful",
response

);

            return response.data;

        }

        catch (error: any) {

           return thunkAPI.rejectWithValue(

error.response?.data?.message ??

error.response?.data?.error ??

"Login Failed"

);

        }

    }

);