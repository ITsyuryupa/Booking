import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import MyButton from "../../components/UI/button/MyButton";
import './Admin.css'
import Header from "../../components/Header/Header";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminHotels from "./AdminHotels";
const Admin = () => {
    const navigate=useNavigate()
    const isAdmin = useSelector(state => state.admin.isAuth)
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
            {/*<AdminHotels></AdminHotels>*/}
        </div>
    );
};

export default Admin;