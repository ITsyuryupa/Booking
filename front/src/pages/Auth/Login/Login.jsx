import React, {useState} from 'react';
import "./Login.css";
import {useNavigate} from "react-router-dom";
import MyButton from "../../../components/UI/button/MyButton";
import {useDispatch, useSelector} from "react-redux"
import MyInput from "../../../components/UI/MyInput/MyInput";
import {login} from "../../../actions/auth";
import userReducer from "../../../reducers/userReducer";
const Login = () => {
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.isAuth)
    function handleClick() {
        navigate("/registration");
    }
    function HomeHandleClick() {
        navigate("/");
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
                    <MyButton onClick={() => dispatch(login(phone, password)) }>Вход</MyButton>
                </div>
                <div className="button-container">
                    <MyButton  onClick={handleClick}>Регистрация</MyButton>
                </div>
                {isAuth  && <div>user</div>}
            </div>
        </div>
    );
};

export default Login;