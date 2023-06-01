import React, {useState} from 'react';
import {useSelector} from "react-redux";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/button/MyButton";
import DatePicker from "react-datepicker";
import {registration, reservation} from "../../actions/auth";
import {useNavigate} from "react-router-dom";
import {format} from "date-fns";
import './Reserv.css'
import "react-datepicker/dist/react-datepicker.css";

const Reserv = ({...props}) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const isAuth = useSelector(state => state.user.isAuth)
    const [name, setName] = useState(user.currentUser.fullName);
    let minAge=new Date();
    minAge.setDate(minAge.getDate()-6576);
    const [birthDate, setBirthDate] = useState(minAge);
    const [phone, setPhone] = useState(user.currentUser.phone);
    const [email, setEmail] = useState(user.currentUser.email);
    const [passportSeries, setPassportSeries] = useState();
    const [passportNumber, setPassportNumber] = useState();
    const [isDisabled, setIsDisabled] = useState(false);


    let dateIn= format(new Date((localStorage.getItem('dateIn'))),"yyyy-MM-dd")
    let dateOut= format(new Date((localStorage.getItem('dateOut'))),"yyyy-MM-dd")

    const handleClick = async () =>  {
        if (!isAuth) {
            navigate("/login")
            alert("Необходимо войти в аккаунт")
        }
        else {
            setIsDisabled(true);
            let BirthInFormat = format((birthDate), "yyyy-MM-dd")
            const success = await reservation(dateIn, dateOut, props.room, user.currentUser, BirthInFormat, passportSeries, passportNumber);
            if (success) {
                props.closeModal();
                setIsDisabled(false);
            } else {
                setIsDisabled(false);
            }
        }

    }
    return (
        <div>
            <div>
                <text>Для бронирования введите данные</text>
                <div>
                    <MyInput value={name} setValue={setName} type="text" placeholder="ФИО" disabled/>
                </div>
                <div>
                    <DatePicker selected={birthDate}
                                onChange={date=>setBirthDate(date)}
                                showYearDropdown
                                scrollableYearDropdown
                                yearDropdownItemNumber={90}
                                dateFormat='dd/MM/yyyy'
                                locale="ru"
                                className="searchInput"
                                placeholderText="Дата рождения"
                    />
                </div>
                <div>
                    <MyInput value={phone} setValue={setPhone} type="text" placeholder="Номер телефона" disabled/>
                </div>
                <div>
                    <MyInput value={email} setValue={setEmail} type="text" placeholder="e-mail" disabled/>
                </div>
                <div>
                    <MyInput value={passportSeries} setValue={setPassportSeries} type="text" placeholder="Серия паспорта"/>
                </div>
                <div>
                    <MyInput value={passportNumber} setValue={setPassportNumber} type="text" placeholder="Номер паспорта"/>
                </div>
                <div>
                    <MyButton onClick={handleClick} disabled={isDisabled}>Забронировать</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Reserv;