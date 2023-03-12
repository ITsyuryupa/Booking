import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";

const AppRouter = () => {

    const isAuth = true
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