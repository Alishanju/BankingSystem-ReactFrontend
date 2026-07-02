import {createAsyncThunk} from "@reduxjs/toolkit";

import TransactionService from "../../services/TransactionService";

export const loadTransactions=createAsyncThunk(

"transactions/load",

async()=>{

const response=

await TransactionService.getTransactions();

return response.data;

}

);