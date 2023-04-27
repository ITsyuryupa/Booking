import React, {useEffect, useState} from 'react';
import axios from "axios";
import HotelItem from "../UI/HotelItem/HotelItem";
import {useParams} from "react-router-dom";
import {format} from "date-fns";
import {setUser} from "../../reducers/userReducer";
import Header from "../Header/Header";
import "./HotelList.css"


const HotelsList = (...props) => {
    const params = useParams()
    let dateIn= format(new Date((localStorage.getItem('dateIn'))),"yyyy-MM-dd")
    let dateOut= format(new Date((localStorage.getItem('dateOut'))),"yyyy-MM-dd")
    let city = params.id
    const [dHotels, setDHotels] = useState([])
    const daka = {
        "dateIn": dateIn,
        "dateOut": dateOut,
        "city": city
    };
    useEffect(() => {
        axios.get('http://localhost:8080/api/hotel/find',{
            params: daka
        })
            .then(data => {
                setDHotels(data.data);
            })

    }, [])
    return (
        <div>
            <Header></Header>

            {params.id != null && dHotels.sort((a, b) => a.id - b.id).map(result => {
                return(
                    <div>
                        <div>
                            {   console.log(dHotels)}
                            <HotelItem result={result} key={result.id}></HotelItem>
                        </div>
                    </div>
                );
            })}
            {dHotels.length == 0 && <div>Ничего не найдено</div>}
        </div>
    );
};

export default HotelsList;