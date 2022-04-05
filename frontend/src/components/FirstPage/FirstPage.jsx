import React from "react";
import './FirstPage.css'
import './JasonStateham';
import JasonStateham from "./JasonStateham";
import Partners from "./Partners";
import Banner from "./Banner";

const FirstPage = () =>{
    return(
        <div>
            <div><JasonStateham/></div>
            <div><Banner/></div>
            <div><Partners/></div>
        </div>
    );
}
export default FirstPage;