import styles from "./Login.module.scss";

import {

    useForm

} from "react-hook-form";

import type {

    LoginRequest

} from "../../types/LoginRequest";

function Login(){

    const {

        register,

        handleSubmit,

        formState:{errors}

    }=useForm<LoginRequest>();

    const onSubmit=(data:LoginRequest)=>{

        console.log(data);

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