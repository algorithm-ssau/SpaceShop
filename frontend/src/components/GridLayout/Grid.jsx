import React from "react";
import styled from "styled-components";
import Catalog_Item from "../SecondPageRockets/Catalog_Item";
import { Responsive, WidthProvider } from "react-grid-layout";


const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
    { id: 0, i: "Планета 0", price: "3 950 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 1, i: "Планета 1", price: "3 950 000$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/24/7b/b6/247bb6fe2448d577cc41c2451b307ecc.jpg" },
    { id: 2, i: "Планета 2", price: "3 950 000$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/0d/ac/25/0dac251761458227a1a0c093aa7986d5.jpg" },
    { id: 3, i: "Планета 3", price: "3 950 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 4, i: "Планета 4", price: "3 950 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 5, i: "Планета 5", price: "3 950 000$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 6, i: "Планета 6", price: "3 950 000$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 7, i: "Планета 7", price: "3 950 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 8, i: "Планета 8", price: "3 950 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 9, i: "Планета 9", price: "3 950 000$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 10, i: "Планета 10", price: "3 950 000$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 11, i: "Планета 11", price: "3 950 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 12, i: "Планета 12", price: "3 950 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
    { id: 13, i: "Планета 13", price: "3 950 000$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/originals/80/47/83/804783d61cab66cb3e61d30640d7522d.jpg" },
];

const GridItemWrapper = styled.div`
  //background: #f5f5f5;

`;

const GridItemContent = styled.div`
  //padding: 8px;

`;

const Root = styled.div`
  //padding: 16px;
  position: relative;
 
`;


export const Grid = () => {
    return (
        <Root>
            <ResponsiveGridLayout
                layouts={{ lg: layout }}
                breakpoints={{ lg: 1500, md: 1300, sm: 900, xs: 200, xxs: 0 }}
                cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
                rowHeight = {500}
            >
                {layout.map(function(item){
                    return (
                        <GridItemWrapper key={item.i}>
                            <GridItemContent ><Catalog_Item  image={item.image} price={item.price} id={1} title={item.i}/></GridItemContent>
                        </GridItemWrapper>
                    );
                })}


            </ResponsiveGridLayout>
        </Root>
    );
};