import React, {useState} from 'react';
import classes from "./SearchBar.css"
import {useNavigate} from "react-router-dom";
const SearchBar = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };
    return (
        <div className={classes.SearchBar}>
            <div className={classes.SearchContainer}>
                <div className={classes.SearchNavigate}>
                    <div className={classes.SearchItem}>
                        <input
                            type="text"
                            placeholder="Куда вы хотите отправится?"
                            className={classes.SearchInput}
                        />
                    </div>
                    <div className={classes.SearchItem}>
                        <span className={classes.SearchNavegateText}>Дата заезда</span>
                    </div>
                    <div className={classes.SearchItem}>
                        <span className={classes.SearchNavegateText}>Дата выезда</span>
                    </div>
                    <div className={classes.SearchItem}>
                        <span className={classes.SearchNavegateText}>1 взрослый 0 детей</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;