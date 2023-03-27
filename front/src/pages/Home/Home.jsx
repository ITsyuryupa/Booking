import React, {useEffect} from 'react';
import './Home.module.css';
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../actions/auth";
import HotelsList from "../../components/HotelsList/HotelsList";



const Home = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    console.log(isAuth)
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <HotelsList></HotelsList>
        </div>
    );
};

export default Home;