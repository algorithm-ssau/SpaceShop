import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPageRockets from "./components/SecondPageRockets/SecondPageRockets"



const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div><SecondPageRockets/></div>
        </div>
    );
}

export default App;
