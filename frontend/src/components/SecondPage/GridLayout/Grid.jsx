import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Catalog_Item from "../Catalog_Item";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const null_layout = [

];

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
    { id: 21, i: "Земля", price: "120 500 000$", x: 1, y: 0, w: 1, h: 1, image: "https://www.meme-arsenal.com/memes/574cf23e805f378372549fdcb71805e1.jpg" },
];

const rockets = [
    { id: 0, i: "Cartel-177", price: "850 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/fd/a3/7a/fda37a08489ef87c342cf663fbc3285d.jpg" },
    { id: 1, i: "Sc-432", price: "230 560$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/e8/e7/81/e8e78109b89a251bfee36755d6b31d07.jpg" },
    { id: 2, i: "MN-323", price: "634 899$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/f0/49/59/f0495906c444ef2ed6fc9af9ba6712ab.jpg" },
    { id: 3, i: "FE-748", price: "222 130$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/3d/ff/ed/3dffeddd56feae1c913c1111672b9c19.jpg" },
    { id: 4, i: "RH-888", price: "930 199$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/0d/5e/8f/0d5e8fad3bb6e9328e44beeb0370e772.jpg" },
    { id: 5, i: "HA-564", price: "200 000$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/f7/8f/2d/f78f2d7b08f4ccc06a9b03ae94524334.jpg" },
    { id: 6, i: "GR-865", price: "999 999$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/70/d2/53/70d253a8c0a644281a6fd0b2cc34bbc3.jpg" },
    { id: 7, i: "JF-777", price: "610 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/26/71/c7/2671c77320ea4949aa5a4e4ce054c539.jpg" },
    { id: 8, i: "KO-897", price: "899 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/90/7b/24/907b247a96ce64aea4f6adc6e40f0c7e.jpg" },
    { id: 9, i: "BT-834", price: "322 999$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/79/7f/5c/797f5ca9b6e65c5f6a007b269b957b2c.jpg" },
    { id: 10, i: "AR-538", price: "555 600$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/92/1d/12/921d123a2480b948d2d2a03693d488a0.jpg" },
    { id: 11, i: "ФJ-463", price: "874 280$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/de/b3/ca/deb3ca70e54500f045dac7ac97e02995.jpg" },
    { id: 12, i: "YR-748", price: "528 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/60/ef/29/60ef296ef41c84be136bc4e3ce380dc5.jpg" },
    { id: 13, i: "AS-324", price: "455 300$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/50/1b/c4/501bc4d5ebddce6d64e3538cecddc4d8.jpg" },
    { id: 14, i: "SR-867", price: "829 000$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/60/4d/df/604ddfa551e62835e22bc6030b4e0a9c.jpg" },
    { id: 15, i: "FN-734", price: "675 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/08/36/8b/08368b11159ae441ff7030b32830359b.jpg" },
    { id: 16, i: "NI-645", price: "900 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/3a/ff/9b/3aff9bef60f9d2d8c569fecdd7777208.jpg" },
    { id: 17, i: "LK-995", price: "928 780$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/3e/5d/cd/3e5dcdd147d586bfdbd43f96bf70bfe3.jpg" },
    { id: 18, i: "TR-768", price: "926 540$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/4a/89/c0/4a89c0c0a91e37942afc4d61196414c5.jpg" },
    { id: 19, i: "GJ-555", price: "362 999$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/c3/c3/ab/c3c3ab3b6b40ea485e4aca35e22ce8ce.jpg" },
    { id: 20, i: "KJ-122", price: "266 999$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/45/35/bd/4535bde506bdab96ab84bd493c8c35c4.jpg" },
]

const aliens = [
    { id: 0, i: "Вибилини", price: "50 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/ca/5c/b8/ca5cb831e5d642c0538715da8e26dc9b.jpg" },
    { id: 1, i: "Миркинети", price: "90 560$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/5a/80/fe/5a80fec2111210f8ef7d9206fcbda640.jpg" },
    { id: 2, i: "Вебэны", price: "54 899$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/64/50/3e/64503e3c3f7fe4bde2c9311e9801743f.jpg" },
    { id: 3, i: "Жевитилы", price: "72 130$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/69/8f/ed/698fed50fae2b0f95380208c45f9feae.jpg"},
    { id: 4, i: "Огонизи", price: "90 199$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/6b/e7/a9/6be7a9e9bd29e3c44605a5a589a6c6ed.jpg" },
    { id: 5, i: "Алтефи", price: "60 010$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/d5/dd/91/d5dd91e3cfc51fce3591e2a5b61cee55.jpg" },
    { id: 6, i: "Неколини", price: "99 999$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/e2/74/ad/e274ad5181ab7219933fa8dec3091a01.jpg" },
    { id: 7, i: "Алннизи", price: "90 610$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/ca/8a/b4/ca8ab44c2385f61d47cb222bc1f4b86e.jpg"},
    { id: 8, i: "Маджифилы", price: "59 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/4e/65/f3/4e65f3c7d499aa5fe39e5bbe2c201fb2.jpg" },
    { id: 9, i: "Гофы", price: "50 322$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/06/ac/b5/06acb53d00c473fac1a7c8810be80c81.jpg" },
    { id: 10, i: "Шодщини", price: "75 600$", x: 2, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/d1/fb/cc/d1fbccdf1528ac7911d2d855827bc89b.jpg" },
    { id: 11, i: "Кадути", price: "94 280$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/00/b1/a5/00b1a5bdfcfa32508c5998fd4f20f114.jpg" },
    { id: 12, i: "Кэвилины", price: "198 000$", x: 0, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/6e/27/9c/6e279c424f36fa5c19d4872a5dbdd19d.jpg" },
    { id: 13, i: "Омурны", price: "85 300$", x: 1, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/af/81/38/af8138e6fbbfa8f3c5a307a98508fd90.jpg" },
    { id: 14, i: "Мэргронизилы", price: "(69 800$", x: 2, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/ee/ec/00/eeec000bcaaae7533318576e82a31ce0.jpg" },
    { id: 15, i: "Вевисы", price: "55 000$", x: 3, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/d8/88/f9/d888f934501aff6e5725f461894af7c4.jpg" },
    { id: 16, i: "Иколинилы", price: "90 000$", x: 0, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/57/a4/c1/57a4c1940f104af3251efd9c2c09a3e2.jpg" },
    { id: 17, i: "Никины", price: "58 780$", x: 1, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/d0/2e/f1/d02ef1c8b260ad7b35e362a54845373b.jpg" },
    { id: 18, i: "Говищины", price: "66 540$", x: 2, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/09/e9/87/09e9872472523c7b90bbc50d56395026.jpg" },
    { id: 19, i: "Мервикны", price: "92 999$", x: 3, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/92/cd/ff/92cdff46058e2920d3913cb31d8e741c.jpg" },
    { id: 20, i: "Бялини", price: "66 999$", x: 0, y: 0, w: 1, h: 1, image: " https://i.pinimg.com/564x/49/64/dd/4964dd3f682c9270a63a453e332b518d.jpg" },

]

const cosmofood = [
    { id: 0, i: "Набор космонавта", price: "50$", x: 0, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/i?id=3a02f48a835570993dccd94de8afd484-5875933-images-thumbs&n=13" },
    { id: 1, i: "Шаурма с курицей", price: "10$", x: 1, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/5220903/img_id3378970885649526457.jpeg/orig" },
    { id: 2, i: "Техасский бургер", price: "9$", x: 2, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/4794619/img_id5438665148636600110.jpeg/orig" },
    { id: 3, i: "Суп грибной", price: "10$", x: 3, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/5235242/img_id9035707322488071214.jpeg/orig" },
    { id: 4, i: "Борщ", price: "11$", x: 0, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/4516625/img_id8405915236140567746.jpeg/orig" },
    { id: 5, i: "Пюре с курицей", price: "15$", x: 1, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/5236357/img_id8403681039899213590.png/orig" },
    { id: 6, i: "Компот", price: "5$", x: 2, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/5332815/img_id3398350520169209343.jpeg/orig" },
    { id: 7, i: "Рисовая каша", price: "9$", x: 3, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/5215227/img_id7200218997168200479.png/orig" },
    { id: 8, i: "Мясо с гречкой", price: "11$", x: 0, y: 0, w: 1, h: 1, image: "https://avatars.mds.yandex.net/get-mpic/4407580/img_id3861951116059167217.jpeg/orig" },
]

const satellite = [
    { id: 0, i: "SP-177", price: "90 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/40/61/0a/40610a5c99306739e33dbeaf117d5c6e.jpg" },
    { id: 1, i: "SP-432", price: "90 560$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/82/fe/eb/82feeb55f6388024b8066940bb073504.jpg" },
    { id: 2, i: "SP-323", price: "94 899$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/59/3e/d2/593ed24b756ec62002e7d694deea60a5.jpg" },
    { id: 3, i: "SP-748", price: "92 130$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/8b/c5/f7/8bc5f7c02099b3ed0b0009d38a2598ff.jpg"},
    { id: 4, i: "SP-888", price: "90 199$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/0d/5e/8f/0d5e8fad3bb6e9328e44beeb0370e772.jpg" },
    { id: 5, i: "SP-564", price: "90 010$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/c7/0b/42/c70b42157aab0bb6586988a1bdd4ea93.jpg" },
    { id: 6, i: "SP-865", price: "99 999$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/da/64/ef/da64efcc5e12ac6ee407b414a5d9ce7b.jpg" },
    { id: 7, i: "SP-777", price: "90 610$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/00/2b/f6/002bf6d38849d2b40fc2025d12ba5410.jpg"},
    { id: 8, i: "SP-897", price: "99 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/4e/80/b9/4e80b9a954862dd5efa03af9d940b5ec.jpg" },
    { id: 9, i: "SP-834", price: "90 322$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/23/96/ad/2396adaf3099f33120f3512701047e88.jpg" },
    { id: 10, i: "SP-538", price: "95 600$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/0d/e7/39/0de7392dd501c2fafdfba329bf9bc132.jpg" },
    { id: 11, i: "SP-463", price: "94 280$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/7f/a5/01/7fa501784eb611b54b4b5dd1a693d364.jpg" },
    { id: 12, i: "SP-748", price: "98 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/e6/8a/49/e68a4961700811dfa00ad32af0727c6d.jpg" },
    { id: 13, i: "SP-324", price: "95 300$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/79/28/c8/7928c8ac53fb77d08e9e0c57a379827c.jpg" },
    { id: 14, i: "SP-867", price: "(99 800$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/d9/71/9a/d9719a2f8db7157317ca12bb82532d74.jpg" },
    { id: 15, i: "SP-734", price: "95 000$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/75/e7/9b/75e79b464f284e4ca736160205b87223.jpg" },
    { id: 16, i: "SP-645", price: "90 000$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/0b/21/1d/0b211dcf9b08d0fd5ed6d165f12d3e0d.jpg" },
    { id: 17, i: "SP-995", price: "98 780$", x: 1, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/aa/ee/76/aaee766aa07fa5fe58530cd359f931f6.jpg" },
    { id: 18, i: "SP-768", price: "196 540$", x: 2, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/e3/bd/f3/e3bdf305f1e249ab93b6c3219b305e96.jpg" },
    { id: 19, i: "SP-555", price: "92 999$", x: 3, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/4c/4e/2c/4c4e2cde7afdb69d128d36f99565f26f.jpg" },
    { id: 20, i: "SP-122", price: "96 999$", x: 0, y: 0, w: 1, h: 1, image: "https://i.pinimg.com/564x/16/50/b5/1650b59a8b70bab484e3d916c5ae2981.jpg" },
]

const equipment = [

]



const GridItemWrapper = styled.div`
  //background: #f5f5f5;

`;

const GridItemContent = styled.div`
  padding: 8px;

`

const Root = styled.div`
  //padding: 16px;
  position: relative;
 
`;


//export const Grid = () => {
export const Grid = ({id_page}) => {

    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('/' + id_page)
            .then(result => result.json())
            .then(body => setItems(body))
    })

    function renderSwitch() {
        switch(id_page) {
            case "planets":
                return planets;
            case "rocket":
                return rockets;
            case "inoman":
                return aliens;
            case "satellite":
                return satellite;
            case "equipment":
                return equipment;
            case "cosmofood":
                return cosmofood;
            default:
                return null_layout;
        }
    }
    
    return (
        <Root>
            <ResponsiveGridLayout
                layouts={{ lg: renderSwitch() }}
                breakpoints={{ lg: 1500, md: 1300, sm: 900, xs: 200, xxs: 0 }}
                cols={{ lg: 4, md: 4, sm: 3, xs: 2, xxs: 1 }}
                rowHeight = {500}
            >
                {renderSwitch().map(function(item){
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