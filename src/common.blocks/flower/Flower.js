//libs
import React from "react"
import PropTypes from 'prop-types'
//comps
import Composition from "./composition/Composition"
import Button from "../button/Button"
//styles || utils
import './../link/link.css'
import './../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'
import './flower.css'
import star from './img/star.svg'
import {regExpPrice} from "../../config/utils"

Flower.propTypes = {
    item: PropTypes.object.isRequired
};
export default function Flower(props) {
    return (
        <React.Fragment>
            {props.item ?
                <div className="flower__wrapper">
                    <article className={'flower'}>
                        <div style={{backgroundImage: "url(" + props.item.src + ")"}} className={'flower__image'}/>
                        <div className="flower__control">
                            <div className="flower__info">
                                <h1 className="flower__header">{props.item.name}</h1>
                                <div className="flower__vendorCode">
                                    Артикул<span>{props.item.vendorCode}</span>
                                </div>
                                <div className="flower__mark">
                                    <img src={star} alt="star"/> {props.item.mark}
                                </div>
                                <a href="#" className="flower__reviewsLink link">8 отзывов</a>
                            </div>
                            <div className="flower__price">
                            <span
                                className="flower__actualPrice fonts__proximaNovaBold">{regExpPrice(props.item.price)}р</span>
                                {props.item.sale ?

                                    <div className="flower__sale">
                                        <span className="flower__salePrice">{props.item.salePrice}р</span>
                                        <span className="flower__salePercents"><span>{props.item.percents}</span></span>
                                    </div> : null
                                }
                            </div>
                            <div className="flower__buttons">
                                <Button className={' flower__inCart'}>В корзину</Button>
                                <a className={'flower__oneClickBuy fonts__proximaNovaBold'} href="#">Купить в один
                                    клик</a>
                            </div>
                            <Composition composition={props.item.composition}/>
                        </div>
                    </article>

                </div>

                :
                null
                //    todo сделать страницу error
            }

        </React.Fragment>
    )
}