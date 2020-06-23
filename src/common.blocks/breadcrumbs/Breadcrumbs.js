//libs
import React from "react"
import PropTypes from 'prop-types'
//comps
import BreadcrumbsLink from "./BreadcrumbsLink"
//styles
import './breadcrumbs.css'

export default function Breadcrumbs({items}) {
    Breadcrumbs.propTypes = {
        items: PropTypes.array.isRequired
    };
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