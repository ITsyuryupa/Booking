import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MyButton from "../UI/button/MyButton";
import Modal from "../UI/Modal/Modal";
import UploadFiles from "../UploadFiles/UploadFiles";
import {useNavigate, useParams} from "react-router-dom";
import './AdminFileList.css'
const AdminFileList = () => {

    const params = useParams();
    const navigate=useNavigate();
    const [fileIds, setFileIds] = useState([]);
    const [files, setFiles] = useState([]);
    const [modalActive, setModalActive]=useState(false);
    function Back() {
        navigate(-1)
    }

    useEffect(() => {
        const getFileIds = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/file/getid/${params.type}/${params.id}`
                );
                setFileIds(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getFileIds();
    }, [params.id]);

    useEffect(() => {
        const getFiles = async () => {
            try {
                const promises = fileIds.map(async (id) => {
                    const response = await axios({
                        method: 'get',
                        url: `http://localhost:8080/api/file/${params.type}/${id}`,
                        responseType: 'blob'
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
        <div className='header'>
            <div className='HeaderContainer'>
                <div>
                    <div className='button-container'>
                        <div className='Buttons'>
                            <MyButton onClick={Back}>Назад</MyButton>
                        </div>
                        <div className='Buttons'>
                            <MyButton onClick={()=> setModalActive((true))}>Добавить фотографии</MyButton>
                        </div>
                    </div>
                <h2 className='caption-container'>Фотографии</h2>
                    <ul className="file-list">
                        {files.map((file) => (
                            <li key={file.id} className="file-item">
                                <img src={file.url} alt={`file-${file.id}`} />
                                <div className='button-container'>
                                    <div>
                                        {console.log(file.id)}
                                        <MyButton>Удалить фотографию</MyButton>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    {params.type=='hotel' && <UploadFiles nameId='hotel_id' id={params.id} type='hotel'></UploadFiles>}
                    {params.type=='room' && <UploadFiles nameId='room_id' id={params.id} type='room'></UploadFiles>}
                </Modal>
            </div>
        </div>
    );
};

export default AdminFileList;
