import styles from "./RecentTransactions.module.scss";

import type {

    Transaction

} from "../../types/Transaction";

interface Props{

    transactions:Transaction[];

}

function RecentTransactions({

    transactions

}:Props){

    return(

        <div className={styles.card}>

            <h2>

                Recent Transactions

            </h2>

            <table>

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Customer</th>

                        <th>Amount</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transactions.map(

                            transaction=>(

                                <tr

                                    key={transaction.id}

                                >

                                    <td>

                                        {transaction.id}

                                    </td>

                                    <td>

                                        {

                                        transaction.customerId

                                        }

                                    </td>

                                    <td>

                                        ₹{transaction.amount}

                                    </td>

                                    <td>

                                        {

                                        transaction.status

                                        }

                                    </td>

                                </tr>

                            )

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default RecentTransactions;