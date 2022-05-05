import React from "react";
import './FirstPage.css'
import './JasonStateham';
import JasonStateham from "./JasonStateham";
import Partners from "./Partners";
import Banner from "./Banner";
import FirstCategory from "./FirstCategory/FirstCategory";
import FirstFooter from "../Footer/FirstFooter";

const FirstPage = () => {
    return(
        <div>
            <JasonStateham/>
            <Banner/>
            <FirstCategory/>
            <Partners/>
            <FirstFooter/>
        </div>
    );
}
export default FirstPage;