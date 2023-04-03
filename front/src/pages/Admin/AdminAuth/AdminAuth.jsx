import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyButton from "../../../components/UI/button/MyButton";
import {adminLogin} from "../../../actions/auth";

const AdminAuth = () => {
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("")
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const isAdmin = useSelector(state => state.admin.isAuth)

    if(isAdmin){
        navigate('/admin')
    }
    
    return (
        <div className="regist">
            <div className="login-form">
                <div className="input-container">
                    <label>Логин</label>
                    <MyInput value={login} setValue={setLogin} type="text" placeholder="Введите логин"/>
                </div>
                <div className="input-container">
                    <label>Пароль </label>
                    <MyInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />
                </div>
                <div className="button-container">
                    <MyButton onClick={() => dispatch(adminLogin(login, password))}>Вход</MyButton>
                </div>
            </div>
        </div>
    );
};

export default AdminAuth;