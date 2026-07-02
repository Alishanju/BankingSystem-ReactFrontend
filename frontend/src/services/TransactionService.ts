import transactionApi from "../api/transactionApi";

import type { Transaction } from "../types/Transaction";
import type {

PageResponse

} from "../types/PageResponse";

class TransactionService {

//     getTransactions() {

//       return transactionApi.get<

// PageResponse<Transaction>

// >(

// "/api/transactions"

// );

//     }

getTransactions() {

    return transactionApi.get<Transaction[]>(

        "/api/transactions"

    );

}

    addTransaction(request:any){

        return transactionApi.post(

            "/api/transactions",

            request

        );

    }

    updateTransaction(

        id:number,

        request:any

    ){

        return transactionApi.patch(

            `/api/transactions/${id}`,

            request

        );

    }

    deleteTransaction(

        id:number

    ){

        return transactionApi.delete(

            `/api/transactions/${id}`

        );


}
}

export default new TransactionService();