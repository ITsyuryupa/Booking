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

    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <span className={styles.Logo}>Today here</span>
                <div className={styles.Buttons}>
                    {isAuth && <strong> Привет {user.currentUser.fullName}</strong>}
                    <AlternativeButton>Заказы</AlternativeButton>
                    {!isAuth && <MyButton onClick={handleClick}>Войти</MyButton>}

                </div>
            </div>
        </div>
    );
};

export default Header;