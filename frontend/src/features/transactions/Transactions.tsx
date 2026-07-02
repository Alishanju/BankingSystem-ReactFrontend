import {

useEffect,

useState

} from "react";

import {

useAppDispatch

} from "../../hooks/useAppDispatch";
import TransactionForm from "./TransactionForm";
import TransactionService from "../../services/TransactionService";

import {

useAppSelector

} from "../../hooks/useAppSelector";

import {

loadTransactions

} from "../../redux/thunks/transactionThunk";

import TransactionTable

from "./TransactionTable";

import styles

from "./Transactions.module.scss";

function Transactions(){

const dispatch=

useAppDispatch();

const{

transactions,

loading

}=

useAppSelector(

state=>state.transaction

);

const[

selected,

setSelected

]=

useState(null);

const[

showForm,

setShowForm

]=

useState(false);

useEffect(()=>{

dispatch(

loadTransactions()

);

},[]);

const handleEdit=(

txn:any

)=>{

setSelected(txn);

setShowForm(true);

};

const handleDelete=async(

id:number

)=>{

if(

!window.confirm(

"Delete Transaction?"

)

)return;

await TransactionService

.deleteTransaction(id);

dispatch(loadTransactions());

};


return(

<div className={styles.container}>

<div className={styles.header}>

<h1>

Transactions

</h1>

<button

onClick={()=>{

setSelected(null);

setShowForm(true);

}}

>

Create Transaction

</button>

</div>

{

loading

?

<p>

Loading...

</p>

:
<>
<TransactionTable

transactions={transactions}

onEdit={handleEdit}

onDelete={handleDelete}

/>

{

showForm&&(

<TransactionForm

transaction={selected}

onClose={()=>setShowForm(false)}

onSuccess={()=>{

dispatch(loadTransactions());

}}

/>

)

}
</>

}

</div>

);

}

export default Transactions;