import React, {useState} from 'react';
import './Rooms.css'
import MyButton from "../../components/UI/button/MyButton";
import Modal from "../../components/UI/Modal/Modal";
import Reserv from "../../components/Reservations/Reserv";
import {closeModal} from "../../components/utils/closeModal";
import {useSelector} from "react-redux";
const RoomItem = ({...props}) => {
    const [modalActive, setModalActive]=useState(false);

    return (
        <div>
            <main>
                <div className='header'>
                    <div className='room'>
                        <div>Номер комнаты: {props.room.id}</div>
                        <div>Название комнаты: {props.room.name}</div>
                        <div>Кол-во спальных мест: {props.room.countBeds}</div>
                        <div>Цена за ночь: {props.room.costNight}</div>
                        <div className='room__btns'>
                            <MyButton onClick={()=> setModalActive((true))}>Зарезервировать</MyButton>
                        </div>
                    </div>
                </div>
            </main>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Reserv room={props.room} closeModal={()=>closeModal(setModalActive)}></Reserv>
                </Modal>
        </div>
    );
};

export default RoomItem;