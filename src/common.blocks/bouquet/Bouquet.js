import React from "react";
import {Link} from "react-router-dom";
import withCartConnect from "../../hoc/withCartConnect";
import {regExpPrice} from "../../config/utils";

import './../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import './../link/link.css'
import './bouquet.css'

function Bouquet(props) {
    return (
        <article className={'bouquet'}>
            <img className={'bouquet__image'} src={props.item.src} alt={props.item.name}/>
            <div className="bouquet__info">
                <div className="bouquet__price-info">
                    <span className="bouquet__price fonts__proximaNovaBold">{regExpPrice(props.item.price)}р</span>
                    {
                        props.item.sale &&

                        <div className="bouquet__sale">{regExpPrice(props.item.salePrice)}р
                            <div className={'bouquet__salePercent'}>
                                <div className="bouquet__saleInner">{props.item.percents}</div>
                            </div>
                        </div>
                    }
                </div>
                <header className={'bouquet__header'}>
                    {
                        props.item.name
                    }
                </header>

            </div>
            <footer className={'bouquet__footer'}>
                <Link className={'link'} to={'/goods/' + props.item.type + '/' + props.item.id}>Подробнее</Link>

                <button onClick={() => {
                    props.addInCart(props.item)
                }} className="bouquet__cartButton">
                    <span className="icon-svg__plus bouquet__plus"></span>
                    <span className="icon-svg__cartico bouquet__cart"></span>
                </button>
            </footer>
        </article>
    )
}

export default withCartConnect(Bouquet)