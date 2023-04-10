import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../../components/Header/Header";
import {useSelector} from "react-redux";
import RoomItem from "../Rooms/RoomItem";
import OrderItem from "./OrderItem";

const Orders = () => {
    const [reservations, setReservations] = useState([])
    const user = useSelector(state => state.user)
    const [refresh, setRefresh] = useState(false);


    useEffect(() => {
        console.log("pognali")
        axios.get('http://localhost:8080/api/reservation/getall/' + user.currentUser.id)
            .then(data => {
                setReservations(data.data);
            })

    }, [refresh])

    const handleRefresh = () => {
        setRefresh(!refresh);
    }

    return (

        <div>
            <Header></Header>
            {reservations.sort((a, b) => a.itemM > b.itemM ? 1 : -1).map(reservation =>{
                    return(
                        <OrderItem reservation={reservation} key={reservation.id} refreshOrders={handleRefresh}></OrderItem>
                    );
                })
            }
        </div>
    );
};

export default Orders;