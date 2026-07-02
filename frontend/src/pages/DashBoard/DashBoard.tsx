import {

useEffect

} from "react";

import DashboardCard from "../../components/dashboard/DashBoardCard"

import {

useAppDispatch

} from "../../hooks/useAppDispatch";

import {

useAppSelector

} from "../../hooks/useAppSelector";

import {

fetchDashboard

} from "../../redux/thunks/dashBoardThunk";

import styles

from "./Dashboard.module.scss";
import RecentTransactions from "../../components/dashBoard/RecentTransactions";
import QuickActions from "../../components/dashBoard/QuickActions";

function Dashboard(){

const dispatch=

useAppDispatch();

const{

data,

loading,

error

}=useAppSelector(

state=>state.dashboard

);

useEffect(()=>{

dispatch(fetchDashboard());

},[]);

if(loading)

return <h2>Loading...</h2>;

if(error)

return <h2>{error}</h2>;

return (

<div className={styles.container}>

<h1>

Dashboard

</h1>

<div className={styles.grid}>

<DashboardCard
title="Customers"
value={data?.totalCustomers ?? 0}
/>

<DashboardCard
title="Transactions"
value={data?.totalTransactions ?? 0}
/>

<DashboardCard
title="Customer Service"
value={data?.customerServiceStatus ?? "DOWN"}
/>

<DashboardCard
title="Transaction Service"
value={data?.transactionServiceStatus ?? "DOWN"}
/>

</div>

<div className={styles.bottomSection}>

<RecentTransactions

transactions={

data?.recentTransactions ??

[]

}

/>

<QuickActions/>

</div>

</div>

);

}

export default Dashboard;