import React from 'react';
import styles from './Header.module.css'
import AlternativeButton from "../UI/button/AlternativeButton";
import MyButton from "../UI/button/MyButton";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/login");
    }
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContainer}>
                <span className={styles.Logo}>Today here</span>
                <div className={styles.Buttons}>
                    <AlternativeButton>Заказы</AlternativeButton>
                    <MyButton onClick={handleClick}>Войти</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Header;