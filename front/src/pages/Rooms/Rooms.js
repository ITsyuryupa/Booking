import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import RoomItem from "./RoomItem";
import "./Rooms.css"
import MyButton from "../../components/UI/button/MyButton";
import {format} from "date-fns";
import Header from "../../components/Header/Header";
import {useSelector} from "react-redux";

const Rooms = () => {
    const params = useParams();
    const isAuth = useSelector(state => state.user.isAuth);
    const navigate = useNavigate();
    const [Hotel, setHotel] = useState([]);
    const [rooms, setRooms] = useState([]);
    let dateIn= format(new Date((localStorage.getItem('dateIn'))),"yyyy-MM-dd");
    let dateOut= format(new Date((localStorage.getItem('dateOut'))),"yyyy-MM-dd");


    const dta = {
        "dateIn": dateIn,
        "dateOut": dateOut,
        "hotel_id": params.id

    };
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/allroom/free', {
            params: dta
        })
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
            <Header></Header>
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
        </div>
    );
};

export default Rooms;