import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../../components/AdminHeader/AdminHeader";
import MyButton from "../../../components/UI/button/MyButton";
import Modal from "../../../components/UI/Modal/Modal";
import AdminAddHotels from "../../../components/AdminAddHotels/AdminAddHotels";
import AdminChangeRoom from "../../../components/AdminChangeRoom/AdminChangeRoom";
import AdminAddRoom from "../../../components/AdminChangeRoom/AdminAddRoom";

const AdminHotel = () => {
    const navigate=useNavigate()
    const params = useParams()
    const [Hotel, setHotel] = useState([])
    const [rooms, setRooms] = useState([])
    const [modalActive, setModalActive]=useState(false)
    const [secondModalActive, setSecondModalActive]=useState(false)
    const [forChangeRoom, setForChangeRoom] = useState('')

    useEffect(()=>{
        axios.get('http://localhost:8080/api/hotel/allroom/' + params.id)
            .then(data=> {
                setRooms(data.data)
            })
    },[secondModalActive, modalActive])
    function Back() {
        navigate(-1)
    }
    function ChangeRoom(room){
        console.log(Object.keys(room).length)
        if ( Object.keys(room).length !== 0){
            setForChangeRoom(room);
            setModalActive((true))
        }
    }
    return (
        <div>
            <main>
                <AdminHeader></AdminHeader>
                <div className="AdminHeader">
                    <MyButton onClick={Back}>Назад</MyButton>
                    <MyButton  onClick={()=> setSecondModalActive((true))}>Добавить комнату</MyButton>
                </div>
                <div className='AdminHeader'>
                    <div className='AdminTableContainer'>
                        <table className='AdminTable'>
                            <thead className='AdminThead'>
                            <tr>
                                <th className='AdminTbody'>№</th>
                                <th className='AdminTbody'>Название</th>
                                <th className='AdminTbody'>Кол-во кроватей</th>
                                <th className='AdminTbody'>Ценв за ночь</th>
                                <th className='AdminTbody'>Кол-во</th>
                            </tr>
                            </thead>
                            <tbody >
                            {rooms.map(result =>(

                                <tr key={result.id}>
                                    <td className='AdminTbody'>{result.id}</td>
                                    <td className='AdminTbody' onClick={()=> ChangeRoom(result)}>{result.name}</td>
                                    <td className='AdminTbody'>{result.countBeds}</td>
                                    <td className='AdminTbody'>{result.costNight}</td>
                                    <td className='AdminTbody'>{result.count}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                {modalActive != false && <AdminChangeRoom room={forChangeRoom}></AdminChangeRoom>}
            </Modal>
            <Modal active={secondModalActive} setActive={setSecondModalActive}>
                {secondModalActive != false && <AdminAddRoom hotelId={params.id}></AdminAddRoom>}
            </Modal>
        </div>
    );
};

export default AdminHotel;