import {

createAsyncThunk

} from "@reduxjs/toolkit";

import CustomerService

from "../../services/CustomerService";

export const loadCustomers=

createAsyncThunk(

"customers/load",

async()=>{

const response=

await CustomerService.getCustomers();

return response.data;

}

);