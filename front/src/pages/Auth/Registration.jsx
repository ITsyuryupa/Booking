import React from 'react';
import MyButton from "../../components/UI/button/MyButton";

const Registration = () => {
    return (
        <div>
            <div>
                <label>ФИО</label>
                <input type="text"required />
                <label>Номер телефона </label>
                <input type="text"/>
                <label>Email</label>
                <input type="text"/>
                <label>Пароль</label>
                <input type="text"/>
                <MyButton>Принять</MyButton>
            </div>

        </div>
    );
};

export default Registration;