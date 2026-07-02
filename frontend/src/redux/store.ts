import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import dashboardReducer from "./slices/dashBoardSlice";
import customerReducer

from "./slices/customerSlice";
import transactionReducer from "./slices/transactionSlice";

export const store=configureStore({

    reducer:{

        auth:authReducer,
        dashboard:dashboardReducer,
        customer:customerReducer,
        transaction:transactionReducer

    }

});

export type RootState=ReturnType<typeof store.getState>;

export type AppDispatch=typeof store.dispatch;