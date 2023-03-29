import React, {useState} from 'react';
import "./Login.css";
import MyButton from "../../../components/UI/button/MyButton";
import MyInput from "../../../components/UI/MyInput/MyInput";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../../actions/auth";

const Login = () => {
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigate=useNavigate()
    const dispatch = useDispatch();const isAuth = useSelector(state => state.user.isAuth)


    function handleClick() {
        navigate("/registration");
    }
    if(isAuth){
        navigate(-1)
    }
    return (
        <div className="regist">
            <div className="login-form">
                <div className="input-container">
                    <label>Номер телефона </label>
                    <MyInput value={phone} setValue={setPhone} type="text" placeholder="Введите номер телефона"/>
                </div>
                <div className="input-container">
                    <label>Пароль </label>
                    <MyInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />
                </div>
                <div className="button-container">
                    <MyButton onClick={() => dispatch(login(phone, password))}>Вход</MyButton>
                </div>
                <div className="button-container">
                    <MyButton onClick={handleClick}>Регистрация</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Login;