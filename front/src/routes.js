import Admin from "./pages/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Registration from "./pages/Auth/Registration";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: HOME_ROUTE,
        Component: Home
}
]
