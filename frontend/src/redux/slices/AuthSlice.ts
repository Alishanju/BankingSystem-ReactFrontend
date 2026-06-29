import { createSlice } from "@reduxjs/toolkit";

interface AuthState{

    token:string | null;

    username:string | null;

    isAuthenticated:boolean;

}

const initialState:AuthState={

    token:null,

    username:null,

    isAuthenticated:false

};

const authSlice=createSlice({

    name:"auth",

    initialState,

    reducers:{

    }

});

export default authSlice.reducer;