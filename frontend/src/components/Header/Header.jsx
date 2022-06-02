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
            <Link to="/">
                <div className="logo" target="_blank"></div>
            </Link>
            <Help1/>
            <About1/>
            {/*<AddTextArea/>*/}
        </div>
    )
}

export default Header;

const Help1 = () => {
    return (
        <div className='HeaderRef1'>
            <Link to='/help'>помощь</Link>
        </div>
    );
}

const About1 = () => {
    return (
        <div className='HeaderRef2'>
            <Link to='/about'>о нас</Link>
        </div>
    );
}
