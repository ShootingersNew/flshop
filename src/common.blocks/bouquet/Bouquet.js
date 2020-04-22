import {Link} from "react-router-dom";
import React from "react";
import './../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import './../link/link.css'
import './bouquet.css'

export default function Bouquet(props) {
    return (
        <article className={'bouquet'}>
            <img className={'bouquet__image'} src={props.item.src} alt={props.item.name}/>
            <div className="bouquet__info">
                <div className="bouquet__price-info">
                    <span className="bouquet__price fonts__proximaNovaBold">{props.item.price}</span>
                    <div className="bouquet__sale">3 150р
                        <div className={'bouquet__salePercent'}>
                            <div className="bouquet__saleInner">-19%</div>
                        </div>
                    </div>
                </div>
                <header className={'bouquet__header'}>
                    {
                        props.item.name
                    }
                </header>

            </div>
            <footer className={'bouquet__footer'}>
                <Link className={'link'} to={props.item.url}>Подробнее</Link>
                <a data-id={props.item.id} className="bouquet__cartButton">
                    <span className="icon-svg__plus bouquet__plus"></span>
                    <span className="icon-svg__cartico bouquet__cart"></span>
                </a>
            </footer>
        </article>
    )
}