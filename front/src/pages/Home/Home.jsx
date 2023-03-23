import React from 'react';
import MyButton from "../../components/UI/button/MyButton";
import AlternativeButton from "../../components/UI/button/AlternativeButton";

import './Home.module.css';
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useSelector} from "react-redux";



const Home = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Home;