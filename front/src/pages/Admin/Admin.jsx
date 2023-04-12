import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import MyButton from "../../components/UI/button/MyButton";
import './Admin.css'
import Header from "../../components/Header/Header";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminHotels from "./AdminHotels";
import UploadFiles from "../../components/UploadFiles/UploadFiles";
import Modal from "../../components/UI/Modal/Modal";
import AdminAddHotels from "../../components/AdminAddHotels/AdminAddHotels";
import AdminFileList from "../../components/AdminFileList/AdminFileList";
const Admin = () => {
    const navigate=useNavigate()
    const isAdmin = useSelector(state => state.admin.isAuth)
    // const [modalActive, setModalActive]=useState(false);
    console.log(isAdmin)
    if(!isAdmin){
        navigate('/admin/login')
    }
    function toHotels(){
        navigate('/admin/hotels')
    }
    function toUsers(){
        navigate('/admin/users')
    }
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className='button-container' onClick={toUsers}><MyButton>Пользователи</MyButton></div>
            <div className='button-container' onClick={toHotels}><MyButton>Отели</MyButton></div>
            {/*<MyButton onClick={()=> setModalActive((true))}>Добавить фотографии</MyButton>*/}
            {/*<Modal active={modalActive} setActive={setModalActive}>*/}
            {/*    <UploadFiles nameId='hotel_id' id='1' type='hotel'></UploadFiles>*/}
            {/*    <AdminFileList hotelId='1'></AdminFileList>*/}
            {/*</Modal>*/}
        </div>
    );
};

export default Admin;