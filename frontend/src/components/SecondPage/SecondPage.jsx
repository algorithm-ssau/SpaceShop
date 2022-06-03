import React from "react";
import SecondFooter from "../Footer/SecondFooter";
import './SecondPage.css'
import './Catalog_Item.css';
import {Grid} from "./GridLayout/Grid";
import PropTypes from "prop-types";
import FirstFooter from "../Footer/FirstFooter";

/*
class SecondPage extends Component{

    state = {items: []};

    render(){
        const {items} = this.state;
        return (
            <div>
                <div className="area">
                     <div className="catalog">
                         <Grid/>
                     </div>
                </div>

            </div>
        );
    }
}*/

const SecondPage = ({id_page}) => {
    let page;
    let name;
    switch (id_page){
        case 1:
            name = "Ракеты"
            page = "rocket"
            break;
        case 2:
            name = "Инопланетяне"
            page = "inoman"
            break;
        case 3:
            name = "Космическая еда"
            page = "cosmofood"
            break;
        case 4:
            name = "Планеты"
            page = "planets"
            break;
        case 5:
            name = "Спутники"
            page = "satellite"
            break;
        case 6:
            name = "Экипировка"
            page = "equipment"
            break;
    }
        return (
            <div>
                <div className="area">
                    <div>
                        <div className="title">{name}</div>
                        {/*{{*/}
                        {/*    1: <div className="title">Ракеты</div>,*/}
                        {/*    2: <div className="title">Инопланетяне</div>,*/}
                        {/*    3: <div className="title">Космическая еда</div>,*/}
                        {/*    4: <div className="title">Планеты</div>,*/}
                        {/*    5: <div className="title">Спутники</div>,*/}
                        {/*    6: <div className="title">Экипировка</div>*/}
                        {/*}[id_page] || <div>Результаты</div>}*/}
                    </div>
                    <div className="catalog">
                        {/*<Grid/>*/}
                        <Grid id_page={page}/>
                    </div>
                    <div className="triangle-container">
                        <button className="triangle-up" onClick={() => {window.scrollTo(0, 0)}}/>
                    </div>
                </div>
            </div>
        );
}



SecondPage.propTypes = {
    id_page: PropTypes.number.isRequired
};
export default SecondPage;