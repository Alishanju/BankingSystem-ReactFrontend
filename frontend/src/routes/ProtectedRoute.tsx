import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../hooks/useAppSelector";

const ProtectedRoute = () => {

    const token = useAppSelector(

        state => state.auth.token

    );

    if (!token) {

        return <Navigate to="/" replace />;

    }

    return <Outlet />;

};

export default ProtectedRoute;