import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import FirstPage from "./components/FirstPage/FirstPage";
import SecondPage from "./components/SecondPage/SecondPage"
import {Link, Route, Routes} from "react-router-dom";
import FirstFooter from "./components/Footer/FirstFooter";
import About from "./components/About/About";
import Help from "./components/Help/Help";



const App = (props) => {
    return (
        <>
            <div>
                <Header/>
                <Link to="/"/>
            </div>
            <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="/firstpage" element={<FirstPage id_page={7}/>}/>
                <Route path="/rockets" element={<SecondPage id_page={1}/>}/>
                <Route path="/inoman" element={<SecondPage id_page={2}/>}/>
                <Route path="/cosmofood" element={<SecondPage id_page={3}/>}/>
                <Route path="/planets" element={<SecondPage id_page={4}/>}/>
                <Route path="/satellite" element={<SecondPage id_page={5}/>}/>
                <Route path="/equipment" element={<SecondPage id_page={6}/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <div>
                <FirstFooter/>
            </div>
        </>
    );
}

export default App;
