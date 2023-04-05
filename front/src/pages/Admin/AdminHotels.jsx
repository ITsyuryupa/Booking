import React, {useEffect, useState} from 'react';
import axios from "axios";
import './AdminHotels.css'
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import MyButton from "../../components/UI/button/MyButton";
import Modal from "../../components/UI/Modal/Modal";
import AdminAddHotels from "../../components/AdminAddHotels/AdminAddHotels";
import {useNavigate} from "react-router-dom";

const AdminHotels = () => {
    const navigate=useNavigate()
    const [results, setResults] = useState([])
    const [modalActive, setModalActive]=useState(false);


    useEffect(() => {
        axios.get('http://localhost:8080/api/hotel/all')
            .then(data => {
                setResults(data.data);
            })

    }, [modalActive])

    function Refresh(){
        navigate('/admin')
    }
    return (
        <div>
            <main>
                <AdminHeader></AdminHeader>
                <div className="AdminHeader">
                    <MyButton onClick={()=> setModalActive((true))}>Добавить отель</MyButton>
                </div>
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
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <AdminAddHotels></AdminAddHotels>
            </Modal>
        </div>
    );
};

export default AdminHotels;