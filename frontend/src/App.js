import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FirstPage from "./components/FirstPage/FirstPage";
import FirstCategory from "./components/FirstCategory/FirstCategory";


const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div>
                <FirstPage/>
            </div>
            <div><FirstCategory/></div>
            <div><Footer/></div>

        </div>
    );
}

export default App;
