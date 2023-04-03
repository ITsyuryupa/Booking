import React, {useEffect, useState} from 'react';
import axios from "axios";
import './AdminHotels.css'

const AdminHotels = () => {
    const [results, setResults] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/hotel/all')
            .then(data => {
                setResults(data.data);
            })

    }, [])
    {console.log(results)}

    return (
        <div className='AdminHeader'>
            <div className='AdminTableContainer'>
                <table className='AdminTable'>
                    <thead className='AdminThead'>
                        <tr>
                            <th className='AdminTbody'>№</th>
                            <th className='AdminTbody'>Название</th>
                            <th className='AdminTbody'>Почта</th>
                            <th className='AdminTbody'>Страна</th>
                            <th className='AdminTbody'>Город</th>
                            <th className='AdminTbody'>Улица</th>
                            <th className='AdminTbody'>Номер дома</th>
                            <th className='AdminTbody'>Описание</th>
                        </tr>
                    </thead>
                    <tbody >
                        {results.map(result =>(
                            <tr key={result.id}>
                                <td className='AdminTbody'>{result.id}</td>
                                <td className='AdminTbody'>{result.name}</td>
                                <td className='AdminTbody'>{result.email}</td>
                                <td className='AdminTbody'>{result.country}</td>
                                <td className='AdminTbody'>{result.city}</td>
                                <td className='AdminTbody'>{result.street}</td>
                                <td className='AdminTbody'>{result.houseNumber}</td>
                                <td className='AdminTbody'>{result.description}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminHotels;