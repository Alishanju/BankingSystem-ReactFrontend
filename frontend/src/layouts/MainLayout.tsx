import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header/Header";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Footer from "../components/layout/Footer/Footer";

import "./MainLayout.scss";

function MainLayout() {

    return (

        <div className="app">

            <Header/>

            <div className="main-content">

                <Sidebar/>

                <section className="page">

                    <Outlet/>

                </section>

            </div>

            <Footer/>

        </div>

    );

}

export default MainLayout;