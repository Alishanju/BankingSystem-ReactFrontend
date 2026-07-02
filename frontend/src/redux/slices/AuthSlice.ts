import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction} from "@reduxjs/toolkit";

import { loginUser }

from "../thunks/authThunk";

interface AuthState{

    token:string|null;

    username:string|null;

    loading:boolean;

    error:string|null;

}

const initialState:AuthState={

    token:null,

    username:null,

    loading:false,

    error:null

};

const authSlice=createSlice({

    name:"auth",

    initialState,

    reducers:{

        logout(state){

            state.token=null;

            state.username=null;

            localStorage.removeItem("token");

        }

    },

    extraReducers:(builder)=>{

        builder

        .addCase(

            loginUser.pending,

            (state)=>{

                state.loading=true;

                state.error=null;

            }

        )

        .addCase(

            loginUser.fulfilled,

            (state,action)=>{

                state.loading=false;

                state.token=

                    action.payload.token;

                state.username=

                    action.payload.user.username;

                localStorage.setItem(

                    "token",

                    action.payload.token

                );

            }

        )

        .addCase(

            loginUser.rejected,

            (state,action)=>{

                state.loading=false;

                state.error=

                    action.payload as string;

            }

        );

    }

});

export const{

logout

}=authSlice.actions;

export default authSlice.reducer;