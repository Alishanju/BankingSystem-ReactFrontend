import styles

from "./QuickActions.module.scss";

import {

useNavigate

} from "react-router-dom";

function QuickActions(){

const navigate=

useNavigate();

return(

<div className={styles.card}>

<h2>

Quick Actions

</h2>

<button

onClick={()=>navigate(

"/customers"

)}

>

Add Customer

</button>

<button

onClick={()=>navigate(

"/transactions"

)}

>

Create Transaction

</button>

</div>

);

}

export default QuickActions;