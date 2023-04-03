import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {adminRoutes, authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";


const AppRouter = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = useSelector(state => state.admin.isAuth)
    return (
        <Routes>
            {isAdmin && adminRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} exact/>
            )}
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;