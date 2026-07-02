import {

useEffect,
useState

} from "react";
import CustomerForm from "./CustomerForm";

import {

useAppDispatch

} from "../../hooks/useAppDispatch";

import {

useAppSelector

} from "../../hooks/useAppSelector";

import {

loadCustomers

} from "../../redux/thunks/CustomerThunk";

import CustomerTable

from "./CustomerTable";

import styles

from "./Customers.module.scss";
import type { Customer } from "../../types/Customer";
import CustomerService from "../../services/CustomerService";

function Customers(){

const dispatch=

useAppDispatch();

const{

customers,

loading

}=useAppSelector(

state=>state.customer

);
const [selectedCustomer,setSelectedCustomer]=

useState<Customer|null>(null);

const [showForm,setShowForm]=

useState(false);
const refreshCustomers = () => {

    dispatch(loadCustomers());

};

useEffect(()=>{

dispatch(

loadCustomers()

);

},[]);

const handleAdd=()=>{

setSelectedCustomer(null);

setShowForm(true);

};

const handleEdit=(customer:Customer)=>{

setSelectedCustomer(customer);

setShowForm(true);

};

const handleDelete=async(id:number)=>{

if(

window.confirm(

"Delete customer?"

)

){

await CustomerService.deleteCustomer(id);

dispatch(loadCustomers());

}

};

return(

<div className={styles.container}>

<div className={styles.header}>

<h1>

Customers

</h1>

<button

onClick={handleAdd}

>

Add Customer

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
<CustomerTable

customers={customers}

onEdit={handleEdit}

onDelete={handleDelete}

/>

{

showForm &&

<CustomerForm

customer={selectedCustomer}

onClose={

()=>setShowForm(false)

}

onSuccess={

refreshCustomers

}

/>

}
</>

}


</div>

);

}

export default Customers;