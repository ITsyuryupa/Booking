import React, {useState} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/button/MyButton";
import './RoomsChange.css'
import {useNavigate} from "react-router-dom";
import {ChangeRoom} from "../../actions/auth";

const AdminChangeRoom = ({onClose,...props}) => {
    console.log(props)
    const navigate = useNavigate();
    const [name, setName] = useState(props.room.name);
    const [costNight, setCostNight] = useState(props.room.costNight);
    const [count, setCount] = useState(props.room.count);
    const [countBeds, setCountBeds] = useState(props.room.countBeds);


    const handleChangeRoom = async () => {
        const hotel = props.room.hotel
        const success = await ChangeRoom(props.room.id, name, countBeds, costNight, count, hotel);
        if (success) {
            props.closeModal();
        }
    }
    return (
            <div>
                <div>
                    <text>Изменение номера</text>
                    <div>
                        <MyInput value={name} setValue={setName} type="text" placeholder="Название"/>
                    </div>
                    <div>
                        <MyInput value={costNight} setValue={setCostNight} type="text" placeholder="Цена за ночь"/>
                    </div>
                    <div>
                        <MyInput value={count} setValue={setCount} type="text" placeholder="Кол-во комнат"/>
                    </div>
                    <div>
                        <MyInput value={countBeds} setValue={setCountBeds} type="text" placeholder="Кол-во кроватей"/>
                    </div>
                    <div className='room__btns'>
                        <MyButton onClick={handleChangeRoom} >изменить</MyButton>
                    </div>
                </div>
            </div>
    );
};

export default AdminChangeRoom;