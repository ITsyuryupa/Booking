import React, {useEffect, useState} from 'react';
import axios from "axios";
import HotelItem from "../UI/HotelItem/HotelItem";
import {useParams} from "react-router-dom";
import {format} from "date-fns";
import {setUser} from "../../reducers/userReducer";


const HotelsList = (...props) => {
    const params = useParams()
    let dateIn= format(new Date((localStorage.getItem('dateIn'))),"yyyy-MM-dd")
    let dateOut= format(new Date((localStorage.getItem('dateOut'))),"yyyy-MM-dd")
    let city = params.id
    console.log(dateIn)
    console.log(dateOut)
    const [results, setResults] = useState([])
    const [dHotels, setDHotels] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/hotel/all')
            .then(data => {
                setResults(data.data);
            })
    }, [])
    const daka = {
        "dateIn": dateIn,
        "dateOut": dateOut,
        "city": city
    };
    useEffect(() => {
        console.log("pognali")
        axios.get('http://localhost:8080/api/hotel/find',{
            params: daka
        })
            .then(data => {
                setDHotels(data.data);
            })

    }, [])

    return (
        <div>
            {params.id == null && results.map(result => {
                return(
                    <div>
                        <div>
                            <HotelItem result={result} key={result.id}></HotelItem>
                        </div>
                    </div>
                );
            })}
            {params.id != null && dHotels.map(result => {
                return(
                    <div>
                        <div>
                            {   console.log(dHotels)}
                            <HotelItem result={result} key={result.id}></HotelItem>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HotelsList;