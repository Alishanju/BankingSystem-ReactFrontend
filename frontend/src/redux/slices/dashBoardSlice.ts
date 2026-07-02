import {

    createSlice,
    type PayloadAction,

} from "@reduxjs/toolkit";

import { fetchDashboard } from "../thunks/dashBoardThunk";

import type { DashboardState } from "../../types/DashBoard";

interface DashboardSliceState{

    data:DashboardState|null;

    loading:boolean;

    error:string|null;

}

const initialState:DashboardSliceState={

    data:null,

    loading:false,

    error:null

};

const dashboardSlice=createSlice({

    name:"dashboard",

    initialState,

    reducers:{},

    extraReducers:(builder)=>{

        builder

        .addCase(

            fetchDashboard.pending,

            (state)=>{

                state.loading=true;

                state.error=null;

            }

        )

        .addCase(

            fetchDashboard.fulfilled,

            (

                state,

                action:PayloadAction<DashboardState>

            )=>{

                state.loading=false;

                state.data=action.payload;

            }

        )

        .addCase(

            fetchDashboard.rejected,

            (

                state,

                action

            )=>{

                state.loading=false;

                state.error=

                    action.error.message??

                    "Dashboard Failed";

            }

        );

    }

});

export default dashboardSlice.reducer;