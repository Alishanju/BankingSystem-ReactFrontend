import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {

    return (

        <aside className={styles.sidebar}>

            <h2 className={styles.logo}>
                Banking
            </h2>

            <nav>

                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/customers"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Customers
                </NavLink>

                <NavLink
                    to="/transactions"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Transactions
                </NavLink>

                {/* <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Settings
                </NavLink> */}

            </nav>

        </aside>

    );

};

export default Sidebar;