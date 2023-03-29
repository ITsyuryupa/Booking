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

    function handleClick() {
        navigate("/login");
    }
    function toProfile() {
        navigate("/profile");
    }
    function ReghandleClick() {
        navigate("/registration");
    }

    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <span className={styles.Logo}>Today here</span>
                    {isAuth && <strong onClick={toProfile}>{user.currentUser.fullName}</strong>}
                    {isAuth&&<AlternativeButton>Заказы</AlternativeButton>}
                    {!isAuth && <div className={styles.Buttons}><MyButton onClick={handleClick}>Войти</MyButton></div>}
                    {!isAuth && <div className={styles.Buttons}><MyButton onClick={ReghandleClick}>Зарегестрироваться</MyButton></div>}
            </div>
        </div>
    );
};

export default Header;