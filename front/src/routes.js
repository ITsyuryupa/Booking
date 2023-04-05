import Admin from "./pages/Admin/Admin";
import {
    ADMIN_ROUTE,
    ADMINHOTELS_ROUTE,
    ADMINLOGIN_ROUTE,
    ADMINUSERSLIST_ROUTE,
    HOME_ROUTE,
    LOGIN_ROUTE, ORDERS_ROUTE,
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
import Profile from "./pages/profile/profile";
import Orders from "./pages/ Orders/Orders";
import AdminAuth from "./pages/Admin/AdminAuth/AdminAuth";
import AdminHotels from "./pages/Admin/AdminHotels";
import AdminUsersList from "./pages/Admin/AdminUsersList/AdminUsersList";

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: ORDERS_ROUTE,
        Component: Orders
    },
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ADMINHOTELS_ROUTE,
        Component: AdminHotels
    },
    {
        path: ADMINUSERSLIST_ROUTE,
        Component: AdminUsersList
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: ADMINLOGIN_ROUTE,
        Component: AdminAuth
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
