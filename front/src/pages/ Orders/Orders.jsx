import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/Header/Header";
import {useSelector} from "react-redux";
import RoomItem from "../Rooms/RoomItem";
import OrderItem from "./OrderItem";

const Orders = () => {
    const [reservations, setReservations] = useState([])
    const user = useSelector(state => state.user)
    const daka = {
        "user_id":  user.currentUser.id
    };
    useEffect(() => {
        console.log("pognali")
        axios.get('http://localhost:8080/api/reservation/getall',{
            params: daka
        })
            .then(data => {
                setReservations(data.data);
            })

    }, [])
    return (

        <div>
            <Header></Header>
            {console.log(reservations)}
            {
                reservations.map(reservation =>{
                    return(
                        <OrderItem reservation={reservation} key={reservation.id}></OrderItem>
                    );
                })
            }
        </div>
    );
};

export default Orders;