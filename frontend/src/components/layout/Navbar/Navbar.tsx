import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { logout } from "../../../redux/slices/authSlice";
import { useAppSelector } from "../../../hooks/useAppSelector";

function Navbar() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const username = useAppSelector(
        state => state.auth.username
    );

    const handleLogout = () => {

        dispatch(logout());

        navigate("/");

    };

    return (

        <nav className={styles.navbar}>

            <div>

                <span className={styles.small}>
                    Welcome back,<b>{username}</b>
                </span>

               

            </div>

            <div >

                <button
    
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;