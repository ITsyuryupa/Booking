import React, {useEffect, useState} from 'react';
import axios from "axios";
import './AdminHotels.css'
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import MyButton from "../../components/UI/button/MyButton";
import Modal from "../../components/UI/Modal/Modal";
import AdminAddHotels from "../../components/AdminAddHotels/AdminAddHotels";
import {useNavigate} from "react-router-dom";
import AdminChangeHotel from "../../components/AdminChangeHotel/AdminChangeHotel";
import AdminDeleteHotel from "../../components/AdminDeleteHotel/AdminDeleteHotel";
import {closeModal} from "../../components/utils/closeModal";
import AdminFileList from "../../components/AdminFileList/AdminFileList";

const AdminHotels = () => {
    const navigate=useNavigate()
    const [results, setResults] = useState([])
    const [modalActive, setModalActive]=useState(false);
    const [secondModalActive, setSecondModalActive]=useState(false)
    const [thirdModalActive, setThirdModalActive]=useState(false)
    const [forChangeHotel, setForChangeHotel] = useState('')



    useEffect(() => {
        axios.get('http://localhost:8080/api/hotel/all')
            .then(data => {
                setResults(data.data);
            })

    }, [modalActive, secondModalActive, thirdModalActive])

    function ChangeHotel(hotel){
        console.log(Object.keys(hotel).length)
        if ( Object.keys(hotel).length !== 0){
            setForChangeHotel(hotel);
            setSecondModalActive((true))
        }
    }
    function DeleteHotel(hotel){
        console.log(Object.keys(hotel).length)
        if ( Object.keys(hotel).length !== 0){
            setForChangeHotel(hotel);
            setThirdModalActive((true))
        }
    }

    function toHotel(id) {
        navigate(`/admin/hotel/${id}`)
    }
    function toFiles(id) {
        navigate(`/admin/files/hotel/${id}`)
    }
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
                                    <th className='AdminTbody'>Комнаты</th>
                                    <th className='AdminTbody'>Изменить</th>
                                    <th className='AdminTbody'>Фотографии</th>
                                    <th className='AdminTbody'>Удалить</th>
                                </tr>
                            </thead>
                            <tbody >
                                {results.map(result =>(
                                    <tr key={result.id}>
                                        <td className='AdminTbody'>{result.id}</td>
                                        <td className='AdminTbody' >{result.name}</td>
                                        <td className='AdminTbody'>{result.email}</td>
                                        <td className='AdminTbody'>{result.country}</td>
                                        <td className='AdminTbody'>{result.city}</td>
                                        <td className='AdminTbody'>{result.street}</td>
                                        <td className='AdminTbody'>{result.houseNumber}</td>
                                        <td className='AdminTbody'>{result.description}</td>
                                        <td className='AdminTbody'><MyButton onClick={() => toHotel(result.id)}>Комнаты</MyButton></td>
                                        <td className='AdminTbody'><MyButton onClick={()=> ChangeHotel(result)}>Изменить</MyButton></td>
                                        <td className='AdminTbody'><MyButton onClick={() => toFiles(result.id)}>Фотографии</MyButton></td>
                                        <td className='AdminTbody'><MyButton onClick={()=> DeleteHotel(result)}>Удалить</MyButton></td>
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
            <Modal active={secondModalActive} setActive={setSecondModalActive}>
                {secondModalActive != false && <AdminChangeHotel hotel={forChangeHotel} closeModal={()=>closeModal(setSecondModalActive)}></AdminChangeHotel>}
            </Modal>
            <Modal active={thirdModalActive} setActive={setThirdModalActive}>
                {thirdModalActive != false && <AdminDeleteHotel hotel={forChangeHotel} closeModal={()=>closeModal(setThirdModalActive)}></AdminDeleteHotel>}
            </Modal>
        </div>
    );
};

export default AdminHotels;