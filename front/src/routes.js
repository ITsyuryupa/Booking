import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    ROOMS_ROUTE,
    SEARCH_ROUTE
} from "./utils/consts";
import Login from "./pages/Auth/Login/Login";
import Home from "./pages/Home/Home";
import Registration from "./pages/Auth/Registration/Registration";
import Rooms from "./pages/Rooms/Rooms";
import HotelsList from "./components/HotelsList/HotelsList";
import Profile from "./components/UI/profile/profile";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
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
    },
    {
        path: SEARCH_ROUTE,
        Component: HotelsList
    },
]
