import React from 'react';
import MyButton from "../UI/button/MyButton";
import {DeleteHotel} from "../../actions/auth";
import {useNavigate} from "react-router-dom";

const AdminDeleteHotel = ({...props}) => {
    const navigate = useNavigate();
    const deleteHotel = async () => {
        const success = await DeleteHotel(props.hotel.id);
        if (success) {
            props.closeModal();
        }
    }
    return (
        <div>
            <div>
                <text>Вы уверены, что хотите удалить отель {props.hotel.name}?</text>
                <div>
                    <MyButton onClick={deleteHotel}>Да</MyButton>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteHotel;