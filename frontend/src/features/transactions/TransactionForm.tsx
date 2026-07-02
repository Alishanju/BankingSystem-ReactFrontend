import { useEffect, useState } from "react";

import CustomerService from "../../services/CustomerService";
import TransactionService from "../../services/TransactionService";

import type { Customer } from "../../types/Customer";
import type { Transaction } from "../../types/Transaction";

import styles from "./TransactionForm.module.scss";

interface Props{

    transaction:Transaction|null;

    onClose:()=>void;

    onSuccess:()=>void;

}

function TransactionForm({

transaction,

onClose,

onSuccess

}:Props){

const[customers,setCustomers]=

useState<Customer[]>([]);

const[form,setForm]=useState({

customerId:"",

amount:"",

transactionType:"DEPOSIT",

description:"",

status:"SUCCESS"

});

useEffect(()=>{

CustomerService

.getCustomers()

.then(response=>{

setCustomers(

response.data.filter(

(customer:Customer)=>

customer.role!=="ADMIN"

)

);

});

},[]);

useEffect(()=>{

if(transaction){

setForm({

customerId:String(transaction.customerId),

amount:String(transaction.amount),

transactionType:transaction.transactionType,

description:transaction.description,

status:transaction.status

});

}

},[transaction]);

const handleChange=(

e:React.ChangeEvent<

HTMLInputElement|

HTMLSelectElement>

)=>{

setForm({

...form,

[e.target.name]:

e.target.value

});

};

const handleSubmit=async(

e:React.FormEvent

)=>{

e.preventDefault();

if(Number(form.amount)<=0){

alert("Amount must be greater than zero");

return;

}

if(transaction){

await TransactionService.updateTransaction(

transaction.id,

{

status:form.status,

description:form.description

}

);

}

else{

await TransactionService.addTransaction({

customerId:Number(form.customerId),

amount:Number(form.amount),

transactionType:form.transactionType,

description:form.description

});

}

onSuccess();

onClose();

};



return(

<div className={styles.overlay}>

<div className={styles.modal}>

<h2>

{

transaction?

"Edit Transaction"

:

"Create Transaction"

}

</h2>

<form

onSubmit={handleSubmit}

>

{

!transaction&&(

<>

<select

name="customerId"

value={form.customerId}

onChange={handleChange}

required

>

<option value="">

Select Customer

</option>

{

customers.map(customer=>(

<option

key={customer.id}

value={customer.id}

>

{customer.name}

</option>

))

}

</select>

<input

type="number"

name="amount"

placeholder="Amount"

min="1"

step="0.01"

value={form.amount}

onChange={handleChange}

required

/>

<select

name="transactionType"

value={form.transactionType}

onChange={handleChange}

>

<option>

DEPOSIT

</option>

<option>

WITHDRAW

</option>

<option>

TRANSFER

</option>

</select>

</>

)

}

{

transaction&&(

<select

name="status"

value={form.status}

onChange={handleChange}

>

<option>

SUCCESS

</option>

<option>

FAILED

</option>

<option>

PENDING

</option>

</select>

)

}

<input

name="description"

placeholder="Description"

value={form.description}

onChange={handleChange}

/>

<div className={styles.actions}>

<button type="submit">

Save

</button>

<button

type="button"

onClick={onClose}

>

Cancel

</button>

</div>

</form>

</div>

</div>

);

}

export default TransactionForm;