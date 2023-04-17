import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru';
import MyInput from "../UI/MyInput/MyInput";
import './SearchBar.css'
import {useNavigate} from "react-router-dom";
registerLocale('ru', ru)
const SearchBar = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState();
    let tomorrow=new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const [endDate, setEndDate] = useState();


    function handleClick() {
        if (startDate && endDate) {
            let today = new Date()
            if (new Date(startDate).toLocaleDateString("ru") < (today).toLocaleDateString("ru")){
                alert("Вы не можете выбрать дату, которая меньше текущей")
            }
            else if (endDate <= startDate)
            {
                alert("Дата выезда не должна равняться или быть меньше даты заезда")}
            else{
            navigate(`/search/${name}`)}
        }
        else {
            alert("Сначала выберте даты поездки")}
    }
    return (
        <div style={{backgroundImage: "url('http://architizer-prod.imgix.net/media/1446726606066Astarte_Suite_private_infinity_pool_Santorini_A5.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="header">
            <div className="headerContainer">
                <div className="searchHeader">
                    <div className="searchContainer">
                        <MyInput value={name} setValue={setName} type="text" placeholder="Город"/>
                        <DatePicker selected={startDate}
                                    onChange={date=>setStartDate(date)}
                                    dateFormat='dd/MM/yyyy'
                                    locale="ru"
                                    className="searchInput"
                                    placeholderText="Дата заезда"
                        />
                        <DatePicker selected={endDate}
                                    dateFormat='dd/MM/yyyy'
                                    onChange={date=>setEndDate(date)}
                                    locale="ru"
                                    className="searchInput"
                                    placeholderText="Дата выезда"
                        />
                        {localStorage.setItem('dateIn', (startDate))}
                        {localStorage.setItem('dateOut', (endDate))}
                        <MyButton onClick={handleClick}>Найти</MyButton>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default SearchBar;