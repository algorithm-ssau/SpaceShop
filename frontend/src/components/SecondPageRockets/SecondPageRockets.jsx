import React, {Component} from "react";
import SecondFooter from "../Footer/SecondFooter";
import './SecondPageRockets.css'
import Catalog_Item from "./Catalog_Item";
import './Catalog_Item.css';


const Items = [
    {
        'id' : 1,
        'name': 'Планета 1',
        'price' : '3000$',
        'image' : 'https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg'
    },
    {
        'id' : 2,
        'name': 'Планета 2',
        'price' : '3000$',
        'image' : 'https://get.wallhere.com/photo/planet-nature-space-red-sky-sphere-Earth-green-Sun-atmosphere-universe-planets-computer-wallpaper-atmosphere-of-earth-outer-space-astronomical-object-macro-photography-still-life-photography-phenomenon-791107.jpg'
    },
    {
        'id' : 3,
        'name': 'Планета 3',
        'price' : '3000$',
        'image' : 'https://i.pinimg.com/originals/24/7b/b6/247bb6fe2448d577cc41c2451b307ecc.jpg'
    },
    {
        'id' : 4,
        'name': 'Планета 4',
        'price' : '3000$',
        'image' : 'https://image.winudf.com/v2/image1/Y29tLlNwYWNlTGl2ZVdhbGxwYXBlckhESFFfc2NyZWVuXzNfMTU2Njk5ODc5NF8wNTU/screen-3.jpg?fakeurl=1&type=.jpg'
    },
    {
        'id':5,
        'name': 'Планета 5',
        'price' : '3000$',
        'image' : 'https://i.pinimg.com/originals/0d/ac/25/0dac251761458227a1a0c093aa7986d5.jpg'
    }
]

class SecondPageRockets extends Component{

    state = {items: []};

    render(){
        const {items} = this.state;
        return (
            <div>
                <div className="area">
                     <div className="catalog">
                         <div className="col-3">
                             {
                                 Items.map( item => { return (
                                     <Catalog_Item
                                         key = {item.id}
                                         id = {item.id}
                                         title = {item.name}
                                         price = {item.price}
                                         image = {item.image}
                                     />
                                 )})
                             }
                         </div>
                     </div>
                </div>
                <SecondFooter/>
            </div>
        );
    }


}


export default SecondPageRockets;