import axios from "axios";

const api = axios.create({

    baseURL: "http://localhost:8081",

    headers: {

        "Content-Type": "application/json"

    },

    timeout: 10000

});

api.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem("token");

        const publicUrls = [

            "/auth/login",

            "/auth/register"

        ];

        const isPublic = publicUrls.some(

            url => config.url?.includes(url)

        );

        if (

            !isPublic &&

            token &&

            config.headers

        ) {

            config.headers.Authorization = `Bearer ${token}`;

        }

        return config;

    },

    (error) => {

        return Promise.reject(error);

    }

);

api.interceptors.response.use(

    (response) => {

        return response;

    },

    (error) => {

        const status = error.response?.status;

        switch (status) {

            case 400:

                console.error("400 - Bad Request");

                break;

            case 401:

                console.error("401 - Unauthorized");

                localStorage.removeItem("token");

                window.location.href = "/";

                break;

            case 403:

                console.error("403 - Forbidden");

                alert("You don't have permission to access this resource.");

                break;

            case 404:

                console.error("404 - Resource Not Found");

                break;

            case 409:

                console.error("409 - Conflict");

                break;

            case 500:

                console.error("500 - Internal Server Error");

                alert("Something went wrong. Please try again later.");

                break;

            case 503:

                console.error("503 - Service Unavailable");

                alert("Service is temporarily unavailable.");

                break;

            default:

                if (!status) {

                    console.error("Network Error");

                    alert("Unable to connect to server.");

                }

        }

        return Promise.reject(error);

    }

);

export default api;