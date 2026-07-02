import logger from "../utils/logger";
import CustomerService

from "./CustomerService";

import TransactionService

from "./TransactionService";

class DashboardService {

    async loadDashboard() {

        const [

customers,

transactions

]

=

await Promise.all([

CustomerService.getCustomers(),

TransactionService.getTransactions()

]);
logger.info("in DashBoardService");
console.log(

customers.data

);

console.log(

transactions.data

);

return{

totalCustomers:

customers.data.length,

totalTransactions:

transactions.data.length,

customerServiceStatus:"UP",

transactionServiceStatus:"UP",
recentTransactions:

transactions.data.slice(

0,

5

)

};


    }

}

export default new DashboardService();