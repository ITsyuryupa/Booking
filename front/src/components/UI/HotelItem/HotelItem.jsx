import React from 'react';
import './HotelItem.css'
import MyButton from "../button/MyButton";
import {login} from "../../../actions/auth";
import {useNavigate} from "react-router-dom";
import Rooms from "../../../pages/Rooms/Rooms";
const HotelItem = ({...props}) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/rooms/${props.result.id}`)
    }
    return (
        <div className="header">
                <div className='Hotel'>
                    <strong>{props.result.id}. Отель: {props.result.name}</strong>
                    <div>
                        Город: {props.result.city}
                    </div>
                    <div>
                        Улица: {props.result.street} Дом:{props.result.houseNumber}
                    </div>
                    <div className='post__btns'>
                        <MyButton onClick={handleClick}>К отелю</MyButton>
                    </div>
                </div>
        </div>

    );
};

export default HotelItem;