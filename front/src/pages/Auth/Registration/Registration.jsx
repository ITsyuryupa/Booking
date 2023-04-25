import React, {useState} from 'react';
import MyButton from "../../../components/UI/button/MyButton";
import "./Registration.css"
import MyInput from "../../../components/UI/MyInput/MyInput";
import {AddHotels, login, registration} from "../../../actions/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
const Registration = () => {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.user.isAuth)

    if (isAuth){
        navigate("/");}
    function handleClick() {
        navigate("/login");
    }

    const ApplyHandleClick = async () => {
        setIsDisabled(true);
        const success = await registration(fullName, phone, email, password);
        if (success) {
            const logins=await dispatch(login(phone, password))
        }
        else {
            setIsDisabled(false);
        }
    }
    return (
        <div className="regist">
            <div className="login-form">
                <div className="input-container">
                    <label>ФИО</label>
                    <MyInput value={fullName} setValue={setFullName} type="text" placeholder="Введите ФИО" required />
                </div>
                <div className="input-container">
                    <label>Номер телефона</label>
                    <MyInput value={phone} setValue={setPhone} type="text" placeholder="Введите номер телефона"/>
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <MyInput value={email} setValue={setEmail} type="text" placeholder="Введите email" />
                </div>
                <div className="input-container">
                    <label>Пароль</label>
                    <MyInput value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />
                </div>
                <div className="button-container">
                    <MyButton onClick={ApplyHandleClick} disabled={isDisabled}>Зарегистрироваться</MyButton>
                </div>
                <div className="button-container">
                    <MyButton onClick={handleClick}>Уже зарегистрированы</MyButton>
                </div>
            </div>

        </div>
    );
};

export default Registration;