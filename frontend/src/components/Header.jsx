import React from "react";
import './Header.css';
import '../App.css';
import AddTextArea from "./AddTextArea";


const Header = () => {
    return(
        <div>
            <div className="Header"> </div>
            <div className="HeaderName">SpaceShop</div>
            <div className="logo"></div>
            <div><AddTextArea /></div>
        </div>
    )
}

export default Header;