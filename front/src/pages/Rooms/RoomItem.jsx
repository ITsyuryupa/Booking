import React from 'react';
import './Rooms.css'
import MyButton from "../../components/UI/button/MyButton";
const RoomItem = ({...props}) => {
    return (
        <div className='header'>
            <div className='room'>
                <div>Номер комнаты: {props.room.id}</div>
                <div>Название комнаты: {props.room.name}</div>
                <div>Количество кроватей {props.room.countBeds}</div>
                <div>Цена за ночь {props.room.costNight}</div>
                <div className='room__btns'>
                    <MyButton >Зарезервировать</MyButton>
                </div>
            </div>
        </div>
    );
};

export default RoomItem;