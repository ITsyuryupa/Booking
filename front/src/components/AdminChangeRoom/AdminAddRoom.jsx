import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AddHotels, createRoom} from "../../actions/auth";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/button/MyButton";
import './RoomsChange.css'
import axios from "axios";
const AdminAddRoom = ({...props}) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [countBeds, setCountBeds] = useState("");
    const [costNight, setCostNight] = useState("");
    const [count, setCount] = useState("");
    const [hotel, setHotel] = useState();
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/get/' + props.hotelId)
            .then(data=> {
                setHotel(data.data)
            })
    },[])
    const handleAddRoom = async () => {
        const success = await createRoom(name, countBeds, costNight, count, hotel);
        if (success) {
            navigate('/admin/hotel/'+props.hotelId);
        }
    }
    return (
        <div>
            <div>
                <text>Добавление номера</text>
                <div>
                    <MyInput value={name} setValue={setName} type="text" placeholder="Название"/>
                </div>
                <div>
                    <MyInput value={countBeds} setValue={setCountBeds} type="text" placeholder="Кол-во кроватей"/>
                </div>
                <div>
                    <MyInput value={costNight} setValue={setCostNight} type="text" placeholder="Цена за ночь"/>
                </div>
                <div>
                    <MyInput value={count} setValue={setCount} type="text" placeholder="Кол-во номеров"/>
                </div>
                <div className='room__btns'>
                    <MyButton onClick={handleAddRoom}>Добавить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default AdminAddRoom;