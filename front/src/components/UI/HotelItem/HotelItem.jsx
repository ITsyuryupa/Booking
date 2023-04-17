import React, { useEffect, useState } from 'react';
import './HotelItem.css';
import MyButton from '../button/MyButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination]);

const HotelItem = ({ ...props }) => {
    const navigate = useNavigate();
    const [fileIds, setFileIds] = useState([]);
    const [files, setFiles] = useState([]);

    function handleClick() {
        navigate(`/rooms/${props.result.id}`);
    }

    useEffect(() => {
        const getFileIds = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/file/getid/hotel/${props.result.id}`);
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
                        url: `http://localhost:8080/api/file/hotel/${id}`,
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

    // return (
    //     <div>
    //         <div className="header">
    //             <div className="hotel-container">
    //             <div className="Hotel">
    //                 <strong>
    //                     {props.result.id}. Отель: {props.result.name}
    //                 </strong>
    //                 <div>Город: {props.result.city}</div>
    //                 <div>
    //                     Улица: {props.result.street} Дом:{props.result.houseNumber}
    //                 </div>
    //                 <div className="post__btns">
    //                     <MyButton onClick={handleClick}>К отелю</MyButton>
    //                 </div>
    //                 {files.length > 0 && (
    //                     <Swiper
    //                         className="swiper-container"
    //                         slidesPerView={1}
    //                         navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
    //                         pagination={{ clickable: true }}
    //                     >
    //                         {files.map((file) => (
    //                             <SwiperSlide className="swiper-slide" key={file.id}>
    //                                 <img src={file.url} alt="" />
    //                             </SwiperSlide>
    //                         ))}
    //                         <div className="swiper-button-prev"></div>
    //                         <div className="swiper-button-next"></div>
    //                     </Swiper>
    //                 )}
    //             </div>
    //         </div>
    //     </div>
    //         </div>
    // );
    return (
        <div>
            <div className="header">
                <div className="hotel-container">

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
                    <div className="Hotel">
                        <strong>
                            {props.result.id}. Отель: {props.result.name}
                        </strong>
                        <div>Город: {props.result.city}</div>
                        <div>
                            Улица: {props.result.street} Дом:{props.result.houseNumber}
                        </div>
                        <div className="post__btns">
                            <MyButton onClick={handleClick}>К отелю</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelItem;
