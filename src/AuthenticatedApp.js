import React from "react";
import {Route, Routes} from 'react-router-dom'
import Navigation from "./Components/Navigation/Navigation";
import Header from "./Components/Header/Header";
import Filter from "./Components/Filter/Filter";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";

function AuthenticatedApp() {
    console.log('hello world')
    console.log('hay world')
    return (
        <div className="conatainer flex">
            <Navigation />
            <div className="middle__part">
                <Header />
                <Filter />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AuthenticatedApp;