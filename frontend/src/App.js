import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage"
import SecondFooter from "./components/Footer/SecondFooter";



const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div><SecondPage id_page={3}/></div>
            <div><SecondFooter/></div>
        </div>
    );
}

export default App;
