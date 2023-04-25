import React, { useEffect, useState } from 'react';
import './HotelItem.css';
import MyButton from '../button/MyButton';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import YMap from "../../Map/YMap";

SwiperCore.use([Navigation, Pagination]);

const HotelItem = ({ result }) => {
    const navigate = useNavigate();

    const [fileIds, setFileIds] = useState([]);
    const [files, setFiles] = useState([]);
    const [fileLoaded, setFileLoaded] = useState(false);
    const [mapLoaded, setMapLoaded] = useState(true);

    const handleMapLoad = () => {
        setMapLoaded(true); // устанавливаем состояние, когда карта загрузилась
    }

    const handleClick = () => {
        navigate(`/rooms/${result.id}`);
    };

    useEffect(() => {
        const getFileIds = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/file/getid/hotel/${result.id}`);
                setFileIds(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getFileIds();
    }, [result.id]);

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

    const renderSwiper = () => {
        return (
            <Swiper
                className="swiper-container"
                slidesPerView={1}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ clickable: true }}
            >
                {files.map((file) => (
                    <SwiperSlide className="swiper-slide" key={file.id}>
                        {!fileLoaded && <div className="placeholder">Загрузка...</div>}
                        <img src={file.url} alt="" onLoad={() => setFileLoaded(true)} />
                    </SwiperSlide>
                ))}

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        );
    };

    const renderMap = () => {

        // проверяем, есть ли координаты
        if (!result.coordinates) {
            return <div>Карта недоступна</div>;
        }

        // возвращаем карту и устанавливаем onLoad событие, чтобы установить состояние, когда карта загрузится
        return (
            <>

                {!mapLoaded && <div>Загрузка карты...</div>}
                {result.coordinates && <YMap coordinates={result.coordinates} description={result.description} onLoad={handleMapLoad} />}
            </>
        );
    };



    return (
        <div>
            <div className="header">
                <div className="hotel-container">
                    {files.length > 0 && renderSwiper()}
                    <div className="Hotel">
                        <strong>{result.name}</strong>
                        <div>Город: {result.city}</div>
                        <div>
                            Улица: {result.street} Дом:{result.houseNumber}
                        </div>
                        <div className="post__btns">
                            <MyButton onClick={handleClick}>К отелю</MyButton>
                        </div>
                    </div>
                    <div>
                        {renderMap()}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HotelItem;
