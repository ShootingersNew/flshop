//libs
import React from "react"
import {Link} from "react-router-dom"
import UserNav from "../userNav/UserNav"
//comps
import Logo from "../logo/Logo"
import Modal from "../modal/Modal"
import CallModalView from "../modal/views/CallModalView/CallModalView"
import Search from "../search/Search"
//styles
import '../link/link.css'
import '../svgfont/svgfont.css'
import '../catalog/catalog.css'
import '../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import '../fonts/__proximaNovaRegular/fonts__proximaNovaRegular.css'
import 'simplebar/dist/simplebar.min.css'
import './header.css'

export default function Header() {

    return (
        <header>
            <div className="header ">
                <div className={'header__container container'}>
                    <Logo/>
                    <Link to={'./catalog'} className="header__catalogButton catalog__button link link_color_inherit ">
                        <span className={'icon-svg__bar catalog__icon'}/>
                        Каталог
                    </Link>
                    <div className="header__telephoneContact">
                        <a href="tel:+79673110351" className={'fonts__proximaNovaBold'}>8 967 311 03 51 </a>
                        <span className={'header__work-schedule'}>c 8 до 20 ежедневно</span>
                        <Modal
                            trigger={<span className="header__callPopupLink">Обратный звонок</span>}
                            header={'Сообщение'}
                            content={<CallModalView/>}
                        />
                    </div>
                    <Search class={'header__search'}/>
                    {/*линк для того, чтобы по href найти и отобразить блок(компонент) с соответвующим айди*/}
                    <UserNav class={'header__userNav'}/>
                </div>

            </div>
        </header>
    )
}