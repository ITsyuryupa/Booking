import React from 'react';
import MyButton from "../../components/UI/button/MyButton";
import './Order.css'
import {format} from "date-fns";

const OrderItem = ({...props}) => {
    let todayDate= format(new Date(),"yyyy-MM-dd")
    console.log(props.reservation)
    return (
        <div>
            <div className='header'>
                <div className='order'>
                    <div>Номер бронирования: {props.reservation.id}</div>
                    <strong>Дата заезда: {props.reservation.dateIn}</strong>
                    <strong>Дата выезда: {props.reservation.dateOut}</strong>
                    <div>Дата рождения: {props.reservation.dateUser}</div>
                    <strong>Номер комнаты: {props.reservation.room.id}</strong>
                    <div>Тип комнаты: {props.reservation.room.name}</div>
                    <div>Дата Кол-во кроватей: {props.reservation.room.countBeds}</div>
                    <strong>Цена за ночь: {props.reservation.room.costNight}</strong>
                    <div className='order__btns'>
                        {todayDate< props.reservation.dateIn &&
                        <MyButton>Отменить бронь</MyButton>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;