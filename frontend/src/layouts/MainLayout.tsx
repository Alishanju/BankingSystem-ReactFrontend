import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Footer from "../components/layout/Footer/Footer";
import { Outlet } from "react-router-dom";

import styles from "./MainLayout.module.scss";
import Navbar from "../components/layout/Navbar/Navbar";

function MainLayout() {

    return (

        <div className={styles.appContainer}>

            <Header />
              <Navbar />

            <div className={styles.bodyContainer}>

                <Sidebar />

                <main className={styles.content}>

                    <Outlet />

                </main>

            </div>

            <Footer />

        </div>

    );

}

export default MainLayout;