import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";
import {AddHotels, UpdateHotel} from "../../actions/auth";

const AdminChangeHotel = ({...props}) => {
    console.log(props)
    const navigate = useNavigate();
    const [name, setName] = useState(props.hotel.name);
    const [email, setEmail] = useState(props.hotel.email);
    const [country, setCountry] = useState(props.hotel.country);
    const [city, setCity] = useState(props.hotel.city);
    const [street, setStreet] = useState(props.hotel.street);
    const [houseNumber, setHouseNumber] = useState(props.hotel.houseNumber);
    const [description, setDescription] = useState(props.hotel.description);
    console.log(props.modalActive)

    const handleChangeHotel = async () => {
        const success = await UpdateHotel(props.hotel.id, name, country, city, street, houseNumber, description, email);
        if (success) {
            props.closeModal();
        }
    }
    return (
        <div>
            <div>
                <text>Добавление отеля</text>
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
                    <MyButton onClick={handleChangeHotel}>Изменить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default AdminChangeHotel;