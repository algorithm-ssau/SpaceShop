import logo from './logo.svg';
import React from "react";
import './App.css';
import './components/Header';
import './components/Footer';
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div>
            <div><Header/></div>
            <div><About/></div>
            <div><Help/></div>
            <div><Footer/></div>
        </div>
    );
}


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

export default App;
