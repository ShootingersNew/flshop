import React from "react";
import './../link/link.css'
import './../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import Flower__compositionLi from "./flower__compositionLi/Flower__compositionLi";
import {regExpPrice} from "../../config/utils";
import b from './../button/button.module.css'
import './flower.css'


export default function Flower(props) {
    //рендерю точки рейтинга
    function renderMark(mark) {
        const markContent = [];
        for (let i = 0; i < 5; i++) {
            if (i < mark) {
                markContent.push(<span className="flower__markRound flower__markRound_active"></span>)
            } else {
                markContent.push(<span className="flower__markRound"></span>)
            }
        }
        return markContent
    }

    return (
        <div className="container">
            {props.item ?

                <article className={'flower'}>
                    <div style={{backgroundImage: "url(" + props.item.src + ")"}} className={'flower__image'}>Тут
                        изображение для цветка, который вы выбрали.
                    </div>
                    <div className="flower__control">
                        <div className="flower__info">
                            <h1 className="flower__header">{props.item.name}</h1>
                            <div className="flower__vendorCode">
                                Артикул<span>{props.item.vendorCode}</span>
                            </div>
                            <div className="flower__mark">
                                {
                                    renderMark(props.item.mark)
                                }
                            </div>
                            <a href="#" className="flower__reviewsLink link">8 отзывов</a>
                        </div>
                        <div className="flower__price">
                            <span
                                className="flower__actualPrice fonts__proximaNovaBold">{regExpPrice(props.item.price)}р</span>
                            {props.sale ?
                                //todo чекнуть как будет выглядеть со скидкой
                                <div className="flower__sale">
                                    <span className="flower__salePrice">4 500р</span>
                                    <span className="flower__salePercents"><span>-55%</span></span>
                                </div> : null
                            }
                        </div>
                        <div className="flower__buttons">
                            <a className={b.button + ' flower__inCart'} href="#">В корзину</a>
                            <a className={'flower__oneClickBuy fonts__proximaNovaBold'} href="#">Купить в один клик</a>
                        </div>
                        <footer className="flower__composition">
                            <div className="flower__compositionHeader">Композиция</div>
                            {/*href указывает на название цветка в данных, получаемых из БД*/}
                            <ul className="flower__compositionList">
                                {props.item.composition.map((item) => {
                                    return <Flower__compositionLi item={item} class={'flower__compositionPreloader'}/>
                                })}

                            </ul>

                        </footer>
                    </div>
                </article>
                :
                null
                //    todo сделать страницу error
            }
        </div>
    )
}