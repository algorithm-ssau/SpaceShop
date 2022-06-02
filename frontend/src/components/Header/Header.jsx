import React from "react";
import './Header.css';
import '../../App.css';
import AddTextArea from "../FirstPage/AddTextArea/AddTextArea";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <Container/>
        </div>
    )
}

const Container = () => {
    return (
        <div className="container">
            <div className="HeaderName">SpaceShop</div>
            <Link to="/firstpage">
                <div className="logo" target="_blank"></div>
            </Link>
            <About/>
            <Help/>
            <AddTextArea/>
        </div>
    )
}

export default Header;

const Help = () => {
    return (
        <div className='HeaderRef1'>
            <a href='#s'>помощь</a>
        </div>
    );
}

const About = () => {
    return (
        <div className='HeaderRef2'>
            <a href='#s'>о нас</a>
        </div>
    );
}
