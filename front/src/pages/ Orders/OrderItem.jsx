import React, {useState} from 'react';
import MyButton from "../../components/UI/button/MyButton";
import './Order.css'
import {format} from "date-fns";
import {AddHotels, DeleteReservation} from "../../actions/auth";
import {useNavigate} from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";
import AdminAddHotels from "../../components/AdminAddHotels/AdminAddHotels";
import MyInput from "../../components/UI/MyInput/MyInput";
import {closeModal} from "../../components/utils/closeModal";

const OrderItem = ({...props}) => {
    const navigate = useNavigate();
    let todayDate= format(new Date(),"yyyy-MM-dd")
    const [modalActive, setModalActive]=useState(false);
    const handleDeleteReservation = async () => {
        const success = await DeleteReservation(props.reservation.id);
        if (success) {
            closeModal(setModalActive)
            props.refreshOrders()
        }
    }
    return (
        <div>
            <main>
                <div className='header'>
                    <div className='order'>
                        <div>Номер бронирования: {props.reservation.id}</div>
                        <strong>Дата заезда: {props.reservation.dateIn}</strong>
                        <strong>Дата выезда: {props.reservation.dateOut}</strong>
                        <div>Дата рождения: {props.reservation.dateUser}</div>
                        <div>Тип комнаты: {props.reservation.room.name}</div>
                        <div>Кол-во спальных мест: {props.reservation.room.countBeds}</div>
                        <strong>Цена за ночь: {props.reservation.room.costNight}</strong>
                        <div className='order__btns'>
                            {todayDate< props.reservation.dateIn &&
                            <MyButton onClick={()=> setModalActive((true))}>Отменить бронь</MyButton>}
                        </div>
                    </div>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <text>Вы точно хотите удалить бронь?</text>
                <div>
                    <MyButton onClick={handleDeleteReservation}>Да</MyButton>
                </div>
            </Modal>

        </div>
    );
};

export default OrderItem;