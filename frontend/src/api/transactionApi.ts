import axios from "axios";

const transactionApi = axios.create({

    baseURL: "http://localhost:8083",

    headers: {

        "Content-Type": "application/json"

    }

});

transactionApi.interceptors.request.use(

    config => {

        const token =

            localStorage.getItem("token");

        if (

            token &&

            config.headers

        ) {

            config.headers.Authorization =

                `Bearer ${token}`;

        }

        return config;

    }

);

export default transactionApi;