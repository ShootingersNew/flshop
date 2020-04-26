import React from "react";
import './../link/link.css'
import './../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import Flower__compositionLi from "./flower__compositionLi/Flower__compositionLi";
import b from './../button/button.module.css'
import './flower.css'

export default function Flower() {
    return (
        <article className={'flower'}>
            <div className={'flower__image'}>Тут изображение для цветка, который вы выбрали.</div>
            <div className="flower__control">
                <div className="flower__info">
                    <h1 className="flower__header">Авторский букет «Розовое превосходство»</h1>
                    <div className="flower__vendorCode">
                        Артикул<span>67479270</span>
                    </div>
                    <div className="flower__mark">
                        <span className="flower__markRound flower__markRound_active"></span>
                        <span className="flower__markRound flower__markRound_active"></span>
                        <span className="flower__markRound flower__markRound_active"></span>
                        <span className="flower__markRound flower__markRound_active"></span>
                        <span className="flower__markRound"></span>
                    </div>
                    <a href="#" className="flower__reviewsLink link">8 отзывов</a>
                </div>
                <div className="flower__price">
                    <span className="flower__actualPrice fonts__proximaNovaBold">2 490р</span>
                    <span className="flower__salePrice">4 500р</span>
                    <span className="flower__salePercents"><span>-55%</span></span>
                </div>
                <div className="flower__buttons">
                    <a className={b.button + ' flower__inCart'} href="#">В корзину</a>
                    <a className={'flower__oneClickBuy fonts__proximaNovaBold'} href="#">Купить в один клик</a>
                </div>
                <footer className="flower__composition">
                    <div className="flower__compositionHeader">Композиция</div>
                    {/*href указывает на название цветка в данных, получаемых из БД*/}
                    <ul className="flower__compositionList">
                        <Flower__compositionLi class={'flower__compositionPreloader'}/>
                        <li className="flower__compositionLi">
                            <a href="alstromeria" className="flower__compositionLink">Альстромерия <span>3</span></a>
                        </li>
                        <li className="flower__compositionLi">
                            <a href="hrizantemaCustovaya" className="flower__compositionLink">Хризантема
                                кустовая <span>5</span></a>
                        </li>
                        <li className="flower__compositionLi">
                            <a href="ruscusZeleny" className="flower__compositionLink">Рускус зеленый <span>7</span></a>
                        </li>
                        <li className="flower__compositionLi">
                            <a href="gipsophila" className="flower__compositionLink">Гипсофила <span>3</span></a>
                        </li>
                        <li className="flower__compositionLi">
                            <a href="gerbera" className="flower__compositionLink">Гербера <span>4</span></a>
                        </li>
                    </ul>

                </footer>
            </div>
        </article>
    )
}