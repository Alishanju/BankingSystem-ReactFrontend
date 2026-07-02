import api from "./axios";

import type {LoginRequest} from "../types/LoginRequest";

import type {LoginResponse} from "../types/LoginResponse";

export const login=(

request:LoginRequest

)=>{

return api.post<LoginResponse>(

"/auth/login",

request

);

};