import React from "react";
import UserNav from "../userNav/UserNav";
import Logo from "../logo/Logo";
import './../../common.blocks/svgfont/svgfont.css'
import './../../common.blocks/catalog/catalog.css'
import font from './../../common.blocks/fonts/__proximaNovaBold/fonts__proximaNovaBold.module.css'
import fontReg from './../../common.blocks/fonts/__proximaNovaRegular/fonts__proximaNovaRegular.module.css'
import './header.css'

export default function Header() {
    return (
        <header>
            <div className="header ">
                <div className={'header__container container'}>
                    <Logo/>
                    <div className="header__catalogButton catalog__button">
                        <span className={'icon-svg__bar catalog__icon'}></span>
                        Каталог
                    </div>
                    <div className="header__telephoneContact">
                        <a href="tel:+79673110351" className={font.fonts__proximaNovaBold}>8 967 311 03 51 </a>
                        <span>c 8 до 20 ежедневно</span>
                        <a href="#callme" className="header__callPopupLink">Обратный звонок</a>
                    </div>
                    {/*линк для того, чтобы по href найти и отобразить блок(компонент) с соответвующим айди*/}
                    <input className={`header__search ${fontReg.fonts__proximaNovaRegular}`}
                           placeholder={'Поиск по товарам'} type="text"/>
                    <UserNav class={'header__userNav'} itemsIn={3} itemsPrice={'5 608р'}/>
                </div>

            </div>
        </header>
    )
}