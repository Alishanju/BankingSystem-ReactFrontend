import api from "../api/axios";

import type {

    LoginRequest

} from "../types/LoginRequest";

import type {

    LoginResponse

} from "../types/LoginResponse";

class AuthService{

    login(

        request:LoginRequest

    ){
          console.log("Login Request");

    console.log(request);

        return api.post<LoginResponse>(

            "/auth/login",

            request

        );

    }

}

export default new AuthService();