import React, {useEffect} from 'react';
import './Home.module.css';
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";




const Home = () => {
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
        </div>
    );
};

export default Home;