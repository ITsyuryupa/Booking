import React from 'react';
import {useNavigate} from "react-router-dom";
import {DeleteRoom} from "../../actions/auth";
import MyButton from "../UI/button/MyButton";

const AdminDeleteRoom = ({...props}) => {
    const navigate = useNavigate();
    const deleteRoom = async () => {
        const success = await DeleteRoom(props.room.id);
    }
    return (
        <div>
            <div>
                <div>
                    <text>Вы уверены, что хотите удалить Комнату {props.room.name}?</text>
                    <div>
                        <MyButton onClick={deleteRoom}>Да</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDeleteRoom;