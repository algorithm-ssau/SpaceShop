import React from "react";
import './Help.css';
import FAQ from "./FAQ";
import HelpHeader from "./HelpHeader";
import HelpBottom from "./HelpBottom";


const Help = () => {

return (
    <div className="help">
        <div className="container">
            <HelpHeader/>
              <FAQ/>
            <HelpBottom/>
        </div>
    </div>
);
}
export default Help;