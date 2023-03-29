import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import RoomItem from "./RoomItem";
import "./Rooms.css"
import MyButton from "../../components/UI/button/MyButton";

const Rooms = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [Hotel, setHotel] = useState([])
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/allroom/' + params.id)
            .then(data=> {
                setRooms(data.data)
                console.log(data.data)
            })
    },[])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/get/' + params.id)
            .then(data=> {
                setHotel(data.data)
                console.log(data.data)
            })
    },[])
    function handleClick() {
        navigate(-1);
    }
    return (
        <div>
            <strong className='header'>{Hotel.name}</strong>
            <title className='header'>{Hotel.description}</title>
            {
                rooms.map(room =>{
                    return(
                        <RoomItem room={room} key={room.id}></RoomItem>
                    );
                })
            }
            <div className='header'>
                <div className='room__btns'>
                    <MyButton className='header' onClick={handleClick}>Назад</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Rooms;