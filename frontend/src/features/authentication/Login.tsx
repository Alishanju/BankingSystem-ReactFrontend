import styles from "./Login.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";

import {useNavigate} from "react-router-dom";

import { loginSchema } from "../../utils/loginSchema";
import AuthService from "../../services/AuthService";

import { loginSuccess } from "../../redux/slices/authSlice";

import {useAppDispatch} from "../../hooks/useAppDispatch";

import {

    useForm

} from "react-hook-form";

import type {

    LoginRequest

} from "../../types/LoginRequest";

function Login(){
    const dispatch=useAppDispatch();
    const navigate=useNavigate();

const {

    register,

    handleSubmit,

    formState:{errors}

}=useForm<LoginRequest>({

    resolver:yupResolver(loginSchema)

});
  const onSubmit = async (

    data: LoginRequest

) => {

    try {

        const response =

            await AuthService.login(data);

        console.log(response.data);

        dispatch(

loginSuccess({

token:response.data.token,

username:response.data.user.username

})

);
navigate("/dashboard");

    }

    catch(error){

        console.error(error);

    }

};

    return(

        <div className={styles.container}>

            <form

                onSubmit={handleSubmit(onSubmit)}

                className={styles.form}

            >

                <h2>

                    Login

                </h2>

                <input

                    placeholder="Username"

                    {...register("username")}

                />

                <p>

                    {errors.username?.message}

                </p>

                <input

                    type="password"

                    placeholder="Password"

                    {...register("password")}

                />

                <p>

                    {errors.password?.message}

                </p>

                <button>

                    Login

                </button>

            </form>

        </div>

    );

}

export default Login;