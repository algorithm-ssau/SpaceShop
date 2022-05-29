import React from "react";
import './FirstCategory.css';
import {Link} from "react-router-dom";

const FirstCategory = () =>{
    return(
        <div>
            <div>
                <Rockets/>
            </div>
            <div>
                <Inoman/>
            </div>
            <div>
                <CosmoFood/>
            </div>
            <div>
                <Planets/>
            </div>
            <div>
                <Satellite/>
            </div>
            <div>
                <Equipment/>
            </div>
        </div>
    );
}
export default FirstCategory;

 const Rockets = () => {
     return(
        <Link to="/rockets">
            <button className='rockets'>Ракеты</button>
        </Link>
    );}


  const Inoman = () => {
      return(
          <Link to="/inoman">
              <button className='Inoman'>Инопланетяне</button>
          </Link>
      );}

 const CosmoFood = () => {
     return(
         <Link to="/cosmofood">
             <button className='CosmoFood'>Космическая еда</button>
         </Link>
     );}

const Planets = () => {
    return(
        <Link to="/planets">
            <button className='Planet'> Планеты </button>
        </Link>
    );}

const Satellite = () => {
    return(
        <Link to="/satellite">
            <button className='Satellite'>Спутники</button>
        </Link>
    );}

const Equipment = () => {
    return(
        <Link to="/equipment">
            <button className='Equipment'>Экипировка</button>
        </Link>
    );}

