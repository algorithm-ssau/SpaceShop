import React from "react";
import './Help.css'

const FAQ = () => {

    return(
        <div>
            <div className="card-container">
                <div className="card">
                    <div className="side">Не привезли товар из заказа, что делать?</div>
                    <div className="side back">Нам очень жаль, что вы столкнулись с данной ситуацией. Недостающий товар необходимо зафиксировать в бланке доставки. Mы свяжемся с вами и согласуем решение данного вопроса.</div>
                </div>
            </div>
            <div className="card-container2">
                <div className="card">
                    <div className="side">Мне доставили не тот товар.</div>
                    <div className="side back">Вернуть и обменять товар можно. Напишите в нашу группу Вконтакте и наш сотрудник Вам поможет.Услуга возвратной доставки в том числе и из-за ненадлежащего качества товара будет оказываться.</div>
                </div>
            </div>
            <div className="card-container3">
                <div className="card">
                    <div className="side">Можно ли отказаться от заказа до получения?</div>
                    <div className="side back">Передумать - это нормально. Главное для нас, чтобы вы оставались довольны своей покупкой. Вы можете отказаться от заказа до его получения, даже если доставка началась.</div>
                </div>
            </div>
            <div className="card-container4">
                <div className="card">
                    <div className="side">Как узнать статус моего обращения?</div>
                    <div className="side back">Если вы составили обращение с нашим сотрудником, то вам должно было прийти оповещение о сроках доставки. Если нет, Вы можете уточнить статус у операторов.</div>
                </div>
            </div>
            <div className="card-container5">
                <div className="card">
                    <div className="side">Как обменять или вернуть товар?</div>
                    <div className="side back">Вернуть или обменять товар можно при условии его наличия во всех магазинах SpaceShop в России. Для этого вы можете обратиться в нашу группу Вконтакте.Там наши сотрудники Вам оперативно помогут.</div>
                </div>
            </div>
        </div>
    );
}
export default FAQ;