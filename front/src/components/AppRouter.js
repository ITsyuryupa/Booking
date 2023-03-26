import React, {useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE} from "../utils/consts";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/auth";

const AppRouter = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(auth())
    }, [])
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