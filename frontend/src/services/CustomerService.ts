import api from "../api/axios";

import type { Customer } from "../types/Customer";
import type {

PageResponse

} from "../types/PageResponse";

class CustomerService {

    getCustomers() {

     return api.get<

PageResponse<Customer>

>(

"/api/customers"

);


    }

}

export default new CustomerService();