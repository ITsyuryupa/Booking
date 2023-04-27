import React, {useEffect, useState} from 'react';
import MyButton from "../../components/UI/button/MyButton";
import Modal from "../../components/UI/Modal/Modal";
import Reserv from "../../components/Reservations/Reserv";
import {closeModal} from "../../components/utils/closeModal";
import axios from "axios";
import {Swiper, SwiperSlide} from "swiper/react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import './Rooms.css'
const RoomItem = ({...props}) => {
    const navigate = useNavigate();
    const [modalActive, setModalActive]=useState(false);
    const [fileIds, setFileIds] = useState([]);
    const [files, setFiles] = useState([]);
    const isAuth = useSelector(state => state.user.isAuth)

    function ReservCheckAuth(){
        if (!isAuth) {
            navigate("/login")
            alert("Необходимо войти в аккаунт")
        }
        else {
            setModalActive((true))
        }
    }

    useEffect(() => {
        const getFileIds = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/file/getid/room/${props.room.id}`);
                setFileIds(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getFileIds();
    }, [props.id]);

    useEffect(() => {
        const getFiles = async () => {
            try {
                const promises = fileIds.map(async (id) => {
                    const response = await axios({
                        method: 'get',
                        url: `http://localhost:8080/api/file/room/${id}`,
                        responseType: 'blob',
                    });
                    const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
                    return { id, url: fileUrl };
                });
                const files = await Promise.all(promises);
                setFiles(files);
            } catch (error) {
                console.log(error);
            }
        };

        if (fileIds.length > 0) {
            getFiles();
        }
    }, [fileIds]);


    return (
        <div>
            <main>
                <div className='header'>
                    <div className='roomItem'>
                        <div>Название комнаты: {props.room.name}</div>
                        <div>Кол-во спальных мест: {props.room.countBeds}</div>
                        <div>Цена за ночь: {props.room.costNight}</div>
                        <div className='room__btns'>
                            <MyButton onClick={()=> ReservCheckAuth()}>Зарезервировать</MyButton>
                        </div>
                        {files.length > 0 && (
                            <Swiper
                                className="swiper-container"
                                slidesPerView={1}
                                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                                pagination={{ clickable: true }}
                            >
                                {files.map((file) => (
                                    <SwiperSlide className="swiper-slide" key={file.id}>
                                        <img src={file.url} alt="" />
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </Swiper>
                        )}
                    </div>
                </div>
            </main>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Reserv room={props.room} closeModal={()=>closeModal(setModalActive)}></Reserv>
                </Modal>
        </div>
    );
};

export default RoomItem;