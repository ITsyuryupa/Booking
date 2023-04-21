import React from 'react';
import './Home.css';
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";




const Home = () => {
    return (
        <div>
            <Header></Header>
                <div className="background-image">
                    <SearchBar></SearchBar>
                </div>
        </div>
    );
};

export default Home;