import React, {useState} from 'react';
import "./Login.css";
import {useNavigate} from "react-router-dom";
const Login = () => {
    // React States

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();
    function handleClick() {
        navigate("/registration");
    }

    // User Login info
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        tel: "Неверный номер телефона",
        pass: "Неверный пароль"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { tel, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === tel.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "tel", message: errors.tel });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Номер телефона </label>
                    <input type="text" name="tel" required />
                    {renderErrorMessage("tel")}
                </div>
                <div className="input-container">
                    <label>Пароль </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" value="Вход"/>
                </div>
                <div className="button-container">
                    <button type ="Myb" onClick={handleClick}>Регистрация</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="regist">
            <div className="login-form">
                <div className="title">Вход</div>
                {isSubmitted ? <div>Вы успешно зашли</div> : renderForm}
            </div>
        </div>
    );
};

export default Login;