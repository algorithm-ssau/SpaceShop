import React from "react";
import './FirstCategory.css';
import button from "bootstrap/js/src/button";

const FirstCategory = () =>{
    return(
        <div>
            <div><Rockets/></div>
            <div><Inoman/></div>
            <div><CosmoFood/></div>
            <div><Planets/></div>
            <div><Satellite/></div>
            <div><Equipment/></div>
        </div>
    );
}
export default FirstCategory;

const Rockets = () => {
    let findbutton = () => {
        let text = 'Следите за обновлением. Скоро здесь появятся ракеты';
        alert(text);}
    return(
        <div> <button className='rockets'  onClick={findbutton}> Ракеты </button>

        </div>
    );}

  const Inoman = () => {
      let findbutton = () => {
          let text = 'Следите за обновлением. Скоро здесь появятся инопланетяне';
          alert(text);}
      return(
          <div> <button className='Inoman'  onClick={findbutton}> Инопланетяне </button>

          </div>
        );}
 const CosmoFood = () => {
     let findbutton = () => {
         let text = 'Следите за обновлением. Скоро здесь появится Космическая Еда';
         alert(text);}
     return(
         <div> <button className='CosmoFood'  onClick={findbutton}> Космическая Еда </button>

         </div>
    );}

const Planets = () => {
    let findbutton = () => {
        let text = 'Следите за обновлением. Скоро здесь появятся планеты';
        alert(text);}
    return(
        <div> <button className='Planet'  onClick={findbutton}> Планеты </button>

        </div>
    );}

const Satellite = () => {
    let findbutton = () => {
        let text = 'Следите за обновлением. Скоро здесь появятся спутники';
        alert(text);}
    return(
        <div> <button className='Satellite'  onClick={findbutton}> Спутники </button>

        </div>
    );}

const Equipment = () => {
    let findbutton = () => {
        let text = 'Следите за обновлением. Скоро здесь появится экипировка';
        alert(text);}
    return(
        <div> <button className='Equipment'  onClick={findbutton}> Экипировка </button>

        </div>
    );}
