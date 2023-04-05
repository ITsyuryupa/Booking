import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import {AddHotels} from "../../actions/auth";

const AdminAddHotels = ({ onClose }) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [description, setDescription] = useState("");
    const [code, setCodes] = useState()

    const handleAddHotel = async () => {
        const success = await AddHotels(name, country, city, street, houseNumber, description, email);
        if (success) {
            navigate('/admin/hotels');
        }
    }

    return (
        <div>
            <div>
                <text>Для бронирования введите данные</text>
                <div>
                    <MyInput value={name} setValue={setName} type="text" placeholder="Название"/>
                </div>
                <div>
                    <MyInput value={email} setValue={setEmail} type="text" placeholder="e-mail"/>
                </div>
                <div>
                    <MyInput value={country} setValue={setCountry} type="text" placeholder="Страна"/>
                </div>
                <div>
                    <MyInput value={city} setValue={setCity} type="text" placeholder="Город"/>
                </div>
                <div>
                    <MyInput value={street} setValue={setStreet} type="text" placeholder="Улица"/>
                </div>
                <div>
                    <MyInput value={houseNumber} setValue={setHouseNumber} type="text" placeholder="Номер дома"/>
                </div>
                <div>
                    <MyInput value={description} setValue={setDescription} type="text" placeholder="Описание"/>
                </div>
                <div>
                    <MyButton onClick={handleAddHotel}>Добавить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default AdminAddHotels;