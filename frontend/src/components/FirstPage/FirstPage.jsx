import React from "react";
import './FirstPage.css'
import './JasonStateham';
import JasonStateham from "./JasonStateham";
import Partners from "./Partners";
import Banner from "./Banner";
import FirstCategory from "./FirstCategory/FirstCategory";
import FirstFooter from "../Footer/FirstFooter";

const FirstPage = () => {
    return (
        <div className="first-page">
            <div className="container">
                <JasonStateham/>
                <Banner/>
                <FirstCategory/>
                <Partners/>
                {/*<FirstFooter/>*/}
            </div>
        </div>
    );
}
export default FirstPage;