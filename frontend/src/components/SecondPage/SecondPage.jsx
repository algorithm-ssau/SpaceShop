import React from "react";
import SecondFooter from "../Footer/SecondFooter";
import './SecondPage.css'
import './Catalog_Item.css';
import {Grid} from "./GridLayout/Grid";
import PropTypes from "prop-types";
import FirstFooter from "../Footer/FirstFooter";



const Items = [
    {
        'id' : 1,
        'name': 'Планета 1',
        'price' : '3 950 000$',
        'image' : 'https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg'
    },
    {
        'id' : 2,
        'name': 'Планета 2',
        'price' : '1 000 000$',
        'image' : 'https://get.wallhere.com/photo/planet-nature-space-red-sky-sphere-Earth-green-Sun-atmosphere-universe-planets-computer-wallpaper-atmosphere-of-earth-outer-space-astronomical-object-macro-photography-still-life-photography-phenomenon-791107.jpg'
    },
    {
        'id' : 3,
        'name': 'Планета 3',
        'price' : '3 000 000$',
        'image' : 'https://i.pinimg.com/originals/24/7b/b6/247bb6fe2448d577cc41c2451b307ecc.jpg'
    },
    {
        'id' : 4,
        'name': 'Планета 4',
        'price' : '2 100 000$',
        'image' : 'https://image.winudf.com/v2/image1/Y29tLlNwYWNlTGl2ZVdhbGxwYXBlckhESFFfc2NyZWVuXzNfMTU2Njk5ODc5NF8wNTU/screen-3.jpg?fakeurl=1&type=.jpg'
    },
    {
        'id':5,
        'name': 'Планета 5',
        'price' : '4 500 000$',
        'image' : 'https://i.pinimg.com/originals/0d/ac/25/0dac251761458227a1a0c093aa7986d5.jpg'
    },
    {
        'id':6,
        'name': 'Планета 6',
        'price' : '2 000 000$',
        'image' : 'https://hdwallsbox.com/wallpapers/l/1920x1200/47/landscapes-stars-planets-digital-art-creative-1920x1200-46145.jpg'
    },
    {
        'id':7,
        'name': 'Планета 7',
        'price' : '3 850 000$',
        'image' : 'https://mocah.org/uploads/posts/751447-Surface-of-planets-Planets.jpg'
    },
    {
        'id':8,
        'name': 'Планета 8',
        'price' : '3 000 000$',
        'image' : 'https://img2.goodfon.ru/original/3800x3000/9/2e/planets-satellites-planety.jpg'
    },
    {
        'id':9,
        'name': 'Планета 9',
        'price' : '5 220 000$',
        'image' : 'https://ae04.alicdn.com/kf/HTB1X4DxQVXXXXckapXXq6xXFXXX0/-.jpg'
    }
]
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
        return (
            <div>
                <div className="area">
                    <div>
                        {{
                            1: <div className="title">Ракеты</div>,
                            2: <div className="title">Инопланетяне</div>,
                            3: <div className="title">Космическая еда</div>,
                            4: <div className="title">Планеты</div>,
                            5: <div className="title">Спутники</div>,
                            6: <div className="title">Экипировка</div>
                        }[id_page] || <div>Результаты</div>}
                    </div>
                    <div className="catalog">
                        <Grid/>
                    </div>
                    <button className="triangle-up" onClick={() => {window.scrollTo(0, 0)}}></button>
                </div>
            </div>
        );
}


SecondPage.propTypes = {
    id_page: PropTypes.number.isRequired
};
export default SecondPage;