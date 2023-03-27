import React, {useEffect, useState} from 'react';
import axios from "axios";
import HotelItem from "../UI/HotelItem/HotelItem";


const HotelsList = () => {

    const [results, setResults] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/all')
            .then(data=> {
                setResults(data.data);
            })
    },[])

    return (
        <div>
            {results.map(result => {
                return(
                    <HotelItem result={result} key={result.id}></HotelItem>
                );
            })}
        </div>
    );
};

export default HotelsList;