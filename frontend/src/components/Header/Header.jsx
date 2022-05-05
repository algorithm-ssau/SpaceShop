import React from "react";
import './Header.css';
import '../../App.css';
import AddTextArea from "../FirstPage/AddTextArea/AddTextArea";

const Header = () => {
    return(
        <div>
            <div><Head/></div>
            <div><About/></div>
            <div><Help/></div>
            <div><AddTextArea /></div>
        </div>
    )
}
export default Header;

const Help = () => {
    return(
        <div className='HeaderRef1'>
            <a href='#s'>помощь</a>
        </div>
    );
}

const About = () => {
    return(
        <div className='HeaderRef2'>
            <a href='#s'>о нас</a>
        </div>
    );
}

const Head = () => {
    return(
        <div>
            <div className="Header"> </div>
            <div className="HeaderName">SpaceShop</div>
            <div className="logo"></div>
        </div>
    );
}