import React, {useEffect} from 'react';
import styles from './Header.module.css'
import AlternativeButton from "../UI/button/AlternativeButton";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
import {auth} from "../../actions/auth";
const Header = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.isAuth)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    function handleClick() {
        navigate("/login");
    }
    function toProfilehandleClick() {
        navigate("/profile");
    }
    function ReghandleClick() {
        navigate("/registration");
    }
    function toHomehandleClick() {
        navigate("/");
    }
    function toOrdershandleClick() {
        navigate("/orders");
    }

    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <span className={styles.Logo} onClick={toHomehandleClick}>Today here</span>
                    {isAuth && <strong onClick={toProfilehandleClick}>{user.currentUser.fullName}</strong>}
                    {isAuth&&                         <div className={styles.ButtonsContainer}>
                        <div className={styles.Buttons}><AlternativeButton onClick={toOrdershandleClick}>Мои брони</AlternativeButton>
                        </div>
                    </div>}
                    {!isAuth &&
                        <div className={styles.ButtonsContainer}>
                            <div className={styles.Buttons}>
                                <MyButton onClick={handleClick}>Войти</MyButton>
                            </div>
                        </div>}
                    {!isAuth && <div className={styles.Buttons}><MyButton onClick={ReghandleClick}>Зарегестрироваться</MyButton></div>}
                {isAuth && <div className={styles.Buttons}><MyButton onClick={() => dispatch(logout()) }>Выход</MyButton></div>}
            </div>
        </div>
    );
};

export default Header;