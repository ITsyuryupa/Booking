import React from 'react';
import styles from './Header.module.css'
import AlternativeButton from "../UI/button/AlternativeButton";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleClick() {
        navigate("/login");
    }
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <span className={styles.Logo}>Today here</span>
                <div className={styles.Buttons}>
                    <AlternativeButton>Заказы</AlternativeButton>
                    {/*{isAuth ? <MyButton onClick={handleClick}>Войти</MyButton> : <div>Уже вошл</div>}*/}
                    {!isAuth && <MyButton onClick={handleClick}>Войти</MyButton>}
                    {isAuth &&  <MyButton onClick={() => dispatch(logout()) }>выйти</MyButton>}
                </div>
            </div>
        </div>
    );
};

export default Header;