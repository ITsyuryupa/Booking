import React from 'react';
import './HotelItem.css'
import MyButton from "../button/MyButton";
import {useNavigate} from "react-router-dom";
const HotelItem = ({...props}) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate(`/rooms/${props.result.id}`)
    }
    return (
        <div>
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
        </div>

    );
};

export default HotelItem;