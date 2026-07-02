import api from "../api/axios";

import type { Customer } from "../types/Customer";
// import type {

// PageResponse

// } from "../types/PageResponse";

class CustomerService {

    getCustomers() {

     return api.get<

Customer[]

>(

"/api/customers"

);


    }
    addCustomer(request:any){

        return api.post(

            "/api/customers",

            request

        );

    }

    updateCustomer(

        id:number,

        request:any

    ){

        return api.put(

            `/api/customers/${id}`,

            request

        );

    }

    deleteCustomer(

        id:number

    ){

        return api.delete(

            `/api/customers/${id}`

        );

    }


}

export default new CustomerService();