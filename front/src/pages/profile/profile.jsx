import React, {useState} from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MyButton from "../../components/UI/button/MyButton";
import './profile.css'
import {userDelete, userUpdate} from "../../actions/auth";
import Header from "../../components/Header/Header";
import {logout} from "../../reducers/userReducer";
import Modal from "../../components/UI/Modal/Modal";
import AdminAddHotels from "../../components/AdminAddHotels/AdminAddHotels";

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.user.isAuth)
    const [name, setName] = useState(user.currentUser.fullName);
    const [phone, setPhone] = useState(user.currentUser.phone);
    const [email, setEmail] = useState(user.currentUser.email);
    const [password, setPassword] = useState(user.currentUser.password);
    const [modalActive, setModalActive]=useState(false);
    if (!isAuth)
    {
        navigate(-1)
    }
    function handleClick() {
        userUpdate(user.currentUser.id, name, phone, email, password)
        user.currentUser.fullName=name;
        user.currentUser.phone=phone;
        user.currentUser.email=email;
        user.currentUser.password=password;
    }
    function deleteUser() {
        userDelete(user.currentUser.id)
        dispatch(logout())
    }
    function backHandleClick() {
        navigate(-1)
    }
    return (
        <div>
            <main>
                <Header></Header>
                <div className='header'>
                    <div className='content'>
                        <strong>Настройки пользователя</strong>
                        <div className="profile__input">
                            ФИО
                        <MyInput value={name} setValue={setName} type="text" placeholder="ФИО"/>
                        </div>
                        <div className="profile__input">
                            Телефон:
                            <MyInput value={phone} setValue={setPhone} type="text" placeholder="ФИО"/>
                        </div>
                        <div className="profile__input">
                            Email:
                            <MyInput value={email} setValue={setEmail} type="text" placeholder="ФИО"/>
                        </div>
                        <div className="profile__input">
                            Пароль:
                            <MyInput value={password} setValue={setPassword} type="password" placeholder="ФИО"/>
                        </div>
                        <div className="profile__btns ">
                            <MyButton onClick={handleClick}>Сохранить изменения</MyButton>
                        </div>
                        <div className="profile__btns ">
                            <MyButton onClick={backHandleClick}>Назад</MyButton>
                        </div>
                        <div className="profile__btns_del">
                            <MyButton  onClick={()=> setModalActive((true))}>Удалить аккаунт</MyButton>
                        </div>
                    </div>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <text>Вы уверены, что хотите удалить аккаунт?</text>
                <div>
                    <MyButton onClick={deleteUser}>Да</MyButton>
                </div>
            </Modal>
        </div>
    );
};

export default Profile;