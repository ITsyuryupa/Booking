import React, {useEffect, useState} from 'react';
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import axios from "axios";

const AdminUsersList = () => {
    const [results, setResults] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/user/getall')
            .then(data => {
                setResults(data.data);
                console.log(results)
            })

    }, [])

    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className='AdminHeader'>
                <div className='AdminTableContainer'>
                    <table className='AdminTable'>
                        <thead className='AdminThead'>
                        <tr>
                            <th className='AdminTbody'>№</th>
                            <th className='AdminTbody'>ФИО</th>
                            <th className='AdminTbody'>Почта</th>
                            <th className='AdminTbody'>Номер телефона</th>
                        </tr>
                        </thead>
                        <tbody >
                        {results.map(result =>(
                            <tr key={result.id}>
                                <td className='AdminTbody'>{result.id}</td>
                                <td className='AdminTbody'>{result.fullName}</td>
                                <td className='AdminTbody'>{result.email}</td>
                                <td className='AdminTbody'>{result.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsersList;