import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru';
import MyInput from "../UI/MyInput/MyInput";
import './SearchBar.css'
registerLocale('ru', ru)
const SearchBar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState(null);
    return (
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
                                            onChange={date=>setEndDate(date)}
                                            dateFormat='dd/MM/yyyy'
                                            locale="ru"
                                            className="searchInput"
                                            placeholderText="Дата выезда"
                                />
                            <MyButton>Найти</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;