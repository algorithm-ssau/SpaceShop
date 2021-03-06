import React from "react";
import './FirstPage.css';

const Partners = () => {
    return(
        <div>
            <div className="text3">Наши партнеры</div>
            <div>
                <a href="https://www.roscosmos.ru" className='partner1' target="_blank"/>
            </div>
            <div>
                <a href="https://www.spacex.com" className='partner2' target="_blank"/>
            </div>
            <div>
                <a href="https://www.kerbalspaceprogram.com" className='partner3' target="_blank"/>
            </div>
            <div>
                <a href="https://www.nasa.gov/nasalive" className='partner4' target="_blank"/>
            </div>
        </div>
    );
}
export default Partners;