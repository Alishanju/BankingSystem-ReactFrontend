import {

createSlice

} from "@reduxjs/toolkit";

import {

loadCustomers

} from "../thunks/CustomerThunk";

const customerSlice=

createSlice({

name:"customers",

initialState:{

customers:[],

loading:false,

error:null

},

reducers:{},

extraReducers:(builder)=>{

builder

.addCase(

loadCustomers.pending,

(state)=>{

state.loading=true;

}

)

.addCase(

loadCustomers.fulfilled,

(state,action)=>{

state.loading=false;

state.customers=action.payload;

}

)

.addCase(

loadCustomers.rejected,

(state)=>{

state.loading=false;

state.error="Unable to load customers";

}

);

}

});

export default customerSlice.reducer;