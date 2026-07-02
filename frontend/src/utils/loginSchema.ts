import * as yup from "yup";

export const loginSchema = yup.object({

    username:yup

        .string()

        .required("Username is required")

        .min(3,"Minimum 3 characters"),

    password:yup

        .string()

        .required("Password is required")

        .min(6,"Minimum 6 characters")

});