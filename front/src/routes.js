import Admin from "./pages/Admin";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ROOMS_ROUTE} from "./utils/consts";
import Login from "./pages/Auth/Login/Login";
import Home from "./pages/Home/Home";
import Registration from "./pages/Auth/Registration/Registration";
import Rooms from "./pages/Rooms/Rooms";

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
    },
    {
        path: ROOMS_ROUTE,
        Component: Rooms
    }
]
