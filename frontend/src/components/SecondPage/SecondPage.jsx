import React from "react";
import SecondFooter from "../Footer/SecondFooter";
import './SecondPage.css'
import './Catalog_Item.css';
import {Grid} from "./GridLayout/Grid";
import PropTypes from "prop-types";
import FirstFooter from "../Footer/FirstFooter";



const planets = [
    { id: 0, i: "Зеро", price: "3 950 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 1, i: "Дэлебат", price: "4 230 560$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/a6/cd/0f/a6cd0ff3f513c620a868be17aff44068.jpg" },
    { id: 2, i: "Сальбатану", price: "2 634 899$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/af/ae/9c/afae9ccc74d345bdfd20d71506e294c6.jpg" },
    { id: 3, i: "Фатал", price: "8 222 130$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/c9/c8/1c/c9c81cd8c1b5a458ceb3beac8b839f77.jpg" },
    { id: 4, i: "Эосфор", price: "7 230 199$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/0e/5d/46/0e5d46edbe2e82234885c80ba148e60c.jpg" },
    { id: 5, i: "Стилбон", price: "10 200 000$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/8f/43/bc/8f43bc360462b8b2a86a58afac4e99eb.jpg" },
    { id: 6, i: "Фэнон", price: "9 999 999$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/f2/18/30/f21830a20a696f41175509239b2c0da2.jpg" },
    { id: 7, i: "Самас", price: "3 610 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/25/40/88/2540888db1dc2b78f82eb077b7ed97a7.jpg" },
    { id: 8, i: "Каямани", price: "12 899 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/19/89/d1/1989d1507f459bdbec8640578aad9d9f.jpg" },
    { id: 9, i: "Нибиру", price: "6 322 999$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/b7/87/ed/b787edd107fb3e765a8fa5dbb1b3c107.jpg" },
    { id: 10, i: "Арктуру", price: "4 555 600$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/fb/8b/8e/fb8b8e31fff2b9e4840a81ed3b6ec780.jpg" },
    { id: 11, i: "Фаэтон", price: "9 874 280$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/c4/25/27/c42527c38330c6c9b6de2c7d464a87b1.jpg" },
    { id: 12, i: "Геспер", price: "15  528 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/07/2f/b3/072fb32281b8907aa787706e3850cbaf.jpg" },
    { id: 13, i: "Нинсиниано", price: "7 455 300$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/1c/82/28/1c8228a2eb69e761dc2cd6eef2d0a300.jpg" },
    { id: 14, i: "Рэдмун", price: "2 829 000$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/af/79/89/af79899e7a184dde39cc2864a9179f86.jpg" },
    { id: 15, i: "Тэрра", price: "9 675 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/8e/33/48/8e33486c886bf31110a6840f5f7f2d59.jpg" },
    { id: 16, i: "Ниос", price: "13 900 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/17/96/28/1796281a85d9ae8da44df335d1ae572e.jpg" },
    { id: 17, i: "Локстан", price: "6 428 780$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/32/12/9b/32129b3f672c25cd5e1a1b4c34c9e5ab.jpg" },
    { id: 18, i: "Гина", price: "8 926 540$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/1f/3e/bc/1f3ebce6b006f1e7e6f3f77570ff62e8.jpg" },
    { id: 19, i: "Гиперион", price: "11 362 999$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/c3/4d/79/c34d7942a1e6005ce37044aa2762bfa0.jpg" },
    { id: 20, i: "Пирос", price: "14 666 999$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/30/17/a2/3017a27633c11c84b8ec29b744937b41.jpg" },

];
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