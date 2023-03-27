import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";


const AppRouter = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <Routes>
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