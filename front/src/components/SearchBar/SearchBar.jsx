import React, {useState} from 'react';
import classes from "./SearchBar.css"
import MyButton from "../UI/button/MyButton";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru';
import MyInput from "../UI/MyInput/MyInput";
registerLocale('ru', ru)

const SearchBar = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [name, setName] = useState(null);
    return (
            <div>
                <div>
                    <MyInput value={name} setValue={setName} type="text" placeholder="Курорт, город, адрес"/>
                </div>
                <div className={classes.SearchBar}>
                    <DatePicker selected={startDate}
                    onChange={date=>setStartDate(date)}
                    dateFormat='dd/MM/yyyy'
                    locale="ru"
                    placeholderText="Дата заезда"
                    />
                </div>
                <div>
                    <DatePicker selected={endDate}
                                onChange={date=>setEndDate(date)}
                                dateFormat='dd/MM/yyyy'
                                locale="ru"
                                placeholderText="Дата выезда"
                    />
                </div>
                <div>
                    <MyButton>Найти</MyButton>
                </div>
            </div>
    );
};

export default SearchBar;