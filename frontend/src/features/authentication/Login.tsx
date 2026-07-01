import styles from "./Login.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";

import {useNavigate} from "react-router-dom";

import { loginSchema } from "../../utils/loginSchema";

import {useAppDispatch} from "../../hooks/useAppDispatch";

import {

    useForm

} from "react-hook-form";

import type {

    LoginRequest

} from "../../types/LoginRequest";
import { loginUser } from "../../redux/thunks/authThunk";
import { useAppSelector } from "../../hooks/useAppSelector";

function Login(){
    const dispatch=useAppDispatch();
    const navigate=useNavigate();
    const{loading,error}=useAppSelector(state=>state.auth);

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

    const result = await dispatch(

        loginUser(data)

    );

    if (loginUser.fulfilled.match(result)) {

        navigate("/dashboard");

    }

};

//   const onSubmit = async (

//     data: LoginRequest

// ) => {

//     try {

//         const response =

//             await AuthService.login(data);

//         console.log(response.data);

//         dispatch(

// loginSuccess({

// token:response.data.token,

// username:response.data.user.username

// })

// );
// navigate("/dashboard");

//     }

//     catch(error){

//         console.error(error);

//     }

// };

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

             {

error && (

<p>

{error}

</p>

)

}

                <button

type="submit"

disabled={loading}

>

{

loading

?

"Signing In..."

:

"Login"

}

</button>

            </form>

        </div>

    );

}

export default Login;