import React from 'react';
import styles from './AdminHeader.module.css'
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
const AdminHeader = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.admin.isAuth)
    const admin = useSelector(state => state.admin)

    function toHomehandleClick() {
        navigate("/admin");
    }
    return (
        <div>
            <div className={styles.Header}>
                <div className={styles.HeaderContainer}>
                    <span className={styles.Logo} onClick={toHomehandleClick}>Today here</span>
                    <strong>{admin.currentAdmin.login}</strong>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;