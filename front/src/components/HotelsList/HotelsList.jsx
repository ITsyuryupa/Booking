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
    // const daka = {
    //     "dateIn": "2022-03-28",
    //     "dateOut": "2022-03-30",
    //     "city": "Kazan"
    // };
    // useEffect(() => {
    //     // noinspection JSCheckFunctionSignatures
    //     console.log("pognali")
    //     axios.get('http://localhost:8080/api/hotel/find',{
    //         params: daka
    //     })
    //         .then(response => {
    //             setDHotels(response);
    //         })
    //
    // }, [])

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
            {/*{dHotels.map(result => {*/}
            {/*    return(*/}
            {/*        <HotelItem result={result} key={result.id}></HotelItem>*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    );
};

export default HotelsList;