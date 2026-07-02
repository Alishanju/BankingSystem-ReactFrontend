import type{

Customer

}

from "../../types/Customer";

import styles

from "./CustomerTable.module.scss";

interface Props{

customers:Customer[];

onEdit:(customer:Customer)=>void;

onDelete:(id:number)=>void;

}

function CustomerTable({

customers,onEdit,onDelete

}:Props){

return(

<table className={styles.table}>

<thead>

<tr>

<th>Name</th>

<th>Email</th>

<th>Phone</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{

customers

.filter(

customer => customer.role !== "ADMIN"

)

.map(customer => (

<tr key={customer.id}>

<td>{customer.name}</td>

<td>{customer.email}</td>

<td>{customer.phone}</td>

<td>

<button
onClick={() => onEdit(customer)}
className={styles.editBtn}
>

Edit

</button>

<button
onClick={() => onDelete(customer.id)}
className={styles.deleteBtn}
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

export default CustomerTable;