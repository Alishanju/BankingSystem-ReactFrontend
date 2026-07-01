import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Login from "../features/authentication/Login";
import Dashboard from "../pages/DashBoard/DashBoard";
import Customers from "../pages/Customers/Customers";
import Transactions from "../pages/Transactions/Transactions";
import Settings from "../pages/Settings/Settings";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />
                 <Route
        element={<ProtectedRoute />}
    >


                <Route element={<MainLayout />}>

                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/customers"
                        element={<Customers />}
                    />

                    <Route
                        path="/transactions"
                        element={<Transactions />}
                    />

                    <Route
                        path="/settings"
                        element={<Settings />}
                    />

                </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;