import React, {useState} from 'react';
import MyButton from "../UI/button/MyButton";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru';
import MyInput from "../UI/MyInput/MyInput";
import './SearchBar.css'
registerLocale('ru', ru)
const SearchBar = () => {
    const [startDate, setStartDate] = useState(new Date());
    let tomorrow=new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    const [endDate, setEndDate] = useState(tomorrow);
    const [name, setName] = useState('Kazan');
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
                                            dateFormat='dd/MM/yyyy'
                                            onChange={date=>setEndDate(date)}
                                            locale="ru"
                                            className="searchInput"
                                            placeholderText="Дата выезда"
                                />
                        {console.log((startDate).toLocaleDateString())}
                        {console.log((endDate).toLocaleDateString())}
                            <MyButton>Найти</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;