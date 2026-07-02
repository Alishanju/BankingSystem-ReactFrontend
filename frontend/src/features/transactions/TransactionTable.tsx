import type {Transaction} from "../../types/Transaction";

import styles from "./TransactionTable.module.scss";

interface Props{

transactions:Transaction[];

onEdit:(transaction:Transaction)=>void;

onDelete:(id:number)=>void;

}

function TransactionTable({

transactions,

onEdit,

onDelete

}:Props){

return(

<table className={styles.table}>

<thead>

<tr>

<th>ID</th>

<th>Customer</th>

<th>Amount</th>

<th>Type</th>

<th>Status</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

transactions.map(txn=>(

<tr key={txn.id}>

<td>{txn.id}</td>

<td>{txn.customerId}</td>

<td>₹{txn.amount}</td>

<td>{txn.transactionType}</td>

<td>{txn.status}</td>

<td>

<button

className={styles.editBtn}

onClick={()=>onEdit(txn)}

>

Edit

</button>

<button

className={styles.deleteBtn}

onClick={()=>onDelete(txn.id)}

>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

);

}

export default TransactionTable;