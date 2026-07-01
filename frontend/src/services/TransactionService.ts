import transactionApi from "../api/transactionApi";

import type { Transaction } from "../types/Transaction";
import type {

PageResponse

} from "../types/PageResponse";

class TransactionService {

    getTransactions() {

      return transactionApi.get<

PageResponse<Transaction>

>(

"/api/transactions"

);

    }

}

export default new TransactionService();