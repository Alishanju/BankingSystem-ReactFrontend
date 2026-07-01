import { createAsyncThunk } from "@reduxjs/toolkit";

import DashboardService from "../../services/DashBoardService";

export const fetchDashboard = createAsyncThunk(

    "dashboard/load",

    async () => {

        try {
            console.log("dashboardThunk");

            const data =

                await DashboardService.loadDashboard();

            console.log("data:"+data);

            return data;

        }

        catch (error) {

            console.error("error:"+error);

            throw error;

        }

    }

);