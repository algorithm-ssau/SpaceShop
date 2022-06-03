import React from "react";
import './About.css'
import Greatings from "./Greatings";
import InBorder from "./InBorder";
import Main from "./Main";


const About = () => {

    return(
        <div className="help">
            <div className="container">
                <Greatings/>
                <InBorder/>
                <Main/>
            </div>
        </div>
    );
}
export default About;