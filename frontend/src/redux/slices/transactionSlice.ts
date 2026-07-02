import {createSlice} from "@reduxjs/toolkit";

import {loadTransactions} from "../thunks/transactionThunk";

const transactionSlice=createSlice({

name:"transactions",

initialState:{

transactions:[],

loading:false,

error:null

},

reducers:{},

extraReducers:(builder)=>{

builder

.addCase(

loadTransactions.pending,

(state)=>{

state.loading=true;

}

)

.addCase(

loadTransactions.fulfilled,

(state,action)=>{

state.loading=false;

state.transactions=

action.payload;

}

)

.addCase(

loadTransactions.rejected,

(state)=>{

state.loading=false;

state.error="Unable to load transactions";

}

);

}

});

export default transactionSlice.reducer;