import React from "react";
import './breadcrumbs.css'

export default function Breadcrumbs() {
    return (
        <div className="container">
            <div className="breadcrumbs">
                <a className={'breadcrumbs__link'} href="/">Главная</a><span
                className={'breadcrumbs__separator'}> / </span>
                <a className={'breadcrumbs__link'} href="#">Каталог</a><span
                className={'breadcrumbs__separator'}> / </span>
                <a className={'breadcrumbs__link'} href="#">Розы</a><span
                className={'breadcrumbs__separator'}> / </span>
                <a className={'breadcrumbs__active'} href="#">Музыка цветов</a>
            </div>
        </div>
    )
}