import { Outlet } from "react-router-dom";

function MainLayout() {

    return (

        <div className="app-container">

            <header className="header">

                Enterprise Banking System

            </header>

            <main className="content">

                <Outlet />

            </main>

        </div>

    );

}

export default MainLayout;