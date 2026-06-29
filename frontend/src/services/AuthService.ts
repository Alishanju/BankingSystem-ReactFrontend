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

        return api.post<LoginResponse>(

            "/auth/login",

            request

        );

    }

}

export default new AuthService();