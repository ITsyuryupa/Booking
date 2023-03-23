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
    const dispatch = useDispatch()

    function handleClick() {
        navigate("/login");
    }
    return (
        <div className={styles.Header}>
            {isAuth && <div>hh</div>}
            <div className={styles.HeaderContainer}>
                <span className={styles.Logo}>Today here</span>
                <div className={styles.Buttons}>
                    <AlternativeButton>Заказы</AlternativeButton>
                    {/*{isAuth ? <MyButton onClick={handleClick}>Войти</MyButton> : <div>Уже вошл</div>}*/}
                    <MyButton onClick={handleClick}>Войти</MyButton>
                  {/* //  {isAuth &&  <MyButton onClick={() => dispatch(logout()) }>выйти</MyButton>} */}
                </div>
            </div>
        </div>
    );
};

export default Header;