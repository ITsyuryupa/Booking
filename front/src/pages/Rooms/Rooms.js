import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import RoomItem from "./RoomItem";

const Rooms = () => {
    const params = useParams()
    console.log(params.id)
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/allroom/' + params.id)
            .then(data=> {
                setRooms(data.data)
                console.log(data.data)
            })
    },[])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/allroom/' + params.id)
            .then(data=> {
                setRooms(data.data)
                console.log(data.data)
            })
    },[])
    return (
        <div>
            {
                rooms.map(room =>{
                    return(
                        <RoomItem room={room} key={room.id}></RoomItem>
                    );
                })
            }
        </div>
    );
};

export default Rooms;