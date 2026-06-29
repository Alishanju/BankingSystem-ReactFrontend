import {

BrowserRouter,

Routes,

Route

} from "react-router-dom";

import Login from "../features/authentication/Login";

import Dashboard from "../pages/DashBoard/DashBoard";
import MainLayout from "../layouts/MainLayout";

function AppRoutes(){

return(

<BrowserRouter>

<Routes>

<Route

path="/"

element={<Login/>}

/>
            <Route
                element={<MainLayout />}
            >

<Route

path="/dashboard"

element={<Dashboard/>}

/>
</Route>

</Routes>

</BrowserRouter>

);

}

export default AppRoutes;