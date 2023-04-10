import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import MyButton from "../../../components/UI/button/MyButton";
import Modal from "../../../components/UI/Modal/Modal";
import AdminAddHotels from "../../../components/AdminAddHotels/AdminAddHotels";
import AdminChangeRoom from "../../../components/AdminChangeRoom/AdminChangeRoom";
import AdminAddRoom from "../../../components/AdminChangeRoom/AdminAddRoom";
import AlternativeButton from "../../../components/UI/button/AlternativeButton";
import AdminDeleteHotel from "../../../components/AdminDeleteHotel/AdminDeleteHotel";
import AdminDeleteRoom from "../../../components/AdminChangeRoom/AdminDeleteRoom";
import {closeModal} from "../../../components/utils/closeModal";

const AdminHotel = () => {
    const navigate=useNavigate()
    const params = useParams()
    const [rooms, setRooms] = useState([])
    const [modalActive, setModalActive]=useState(false)
    const [secondModalActive, setSecondModalActive]=useState(false)
    const [thirdModalActive, setThirdModalActive]=useState(false)
    const [forChangeRoom, setForChangeRoom] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/allroom/' + params.id)
            .then(data=> {
                setRooms(data.data)
            })
    },[secondModalActive, modalActive, thirdModalActive])
    function Back() {
        navigate('/admin/hotels')
    }
    function ChangeRoom(room){
        console.log(Object.keys(room).length)
        if ( Object.keys(room).length !== 0){
            setForChangeRoom(room);
            setModalActive((true))
        }
    }
    function DeleteRoom(room){
        console.log(Object.keys(room).length)
        if ( Object.keys(room).length !== 0){
            setForChangeRoom(room);
            setThirdModalActive((true))
        }
    }
    return (
        <div>
            <main>
                <AdminHeader></AdminHeader>
                <div className="AdminHeader">
                    <div className="ButtonsContainer">
                        <div className="Buttons">
                            <MyButton onClick={Back}>Назад</MyButton>
                        </div>
                        <div className="Buttons">
                            <MyButton  onClick={()=> setSecondModalActive((true))}>Добавить комнату</MyButton>
                        </div>
                    </div>
                </div>
                <div className='AdminHeader'>
                    <div className='AdminTableContainer'>
                        <table className='AdminTable'>
                            <thead className='AdminThead'>
                            <tr>
                                <th className='AdminTbody'>№</th>
                                <th className='AdminTbody'>Название</th>
                                <th className='AdminTbody'>Кол-во кроватей</th>
                                <th className='AdminTbody'>Цена за ночь</th>
                                <th className='AdminTbody'>Кол-во</th>
                                <th className='AdminTbody'>Изменить</th>
                                <th className='AdminTbody'>Удалить</th>
                            </tr>
                            </thead>
                            <tbody >
                            {rooms.map(result =>(

                                <tr key={result.id}>
                                    <td className='AdminTbody'>{result.id}</td>
                                    <td className='AdminTbody'>{result.name}</td>
                                    <td className='AdminTbody'>{result.countBeds}</td>
                                    <td className='AdminTbody'>{result.costNight}</td>
                                    <td className='AdminTbody'>{result.count}</td>
                                    <td className='AdminTbody'><MyButton onClick={()=> ChangeRoom(result)}>Изменить</MyButton></td>
                                    <td className='AdminTbody'><MyButton onClick={()=> DeleteRoom(result)}>Удалить</MyButton></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                {modalActive != false && <AdminChangeRoom room={forChangeRoom} closeModal={()=>closeModal(setModalActive)}></AdminChangeRoom>}
            </Modal>
            <Modal active={secondModalActive} setActive={setSecondModalActive}>
                {secondModalActive != false && <AdminAddRoom hotelId={params.id}></AdminAddRoom>}
            </Modal>
            <Modal active={thirdModalActive} setActive={setThirdModalActive}>
                {thirdModalActive != false && <AdminDeleteRoom room={forChangeRoom} closeModal={()=>closeModal(setModalActive)}></AdminDeleteRoom>}
            </Modal>
        </div>
    );
};

export default AdminHotel;