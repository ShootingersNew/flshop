//libs
import React from "react"
import PropTypes from 'prop-types'
//comps
import Composition from "./composition/Composition"
import Button from "../button/Button"
import withCartConnect from "../../hoc/withCartConnect"
//styles || utils
import './flower.css'
import star from './img/star.svg'
import {regExpPrice} from "../../config/utils"

Flower.propTypes = {
    item: PropTypes.object.isRequired
};

function Flower(props) {
    const addInCart = (item) => {
        props.addInCart(item)
    };
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
                                <div className="flower__reviewsLink link">8 отзывов</div>
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
                                <Button
                                    onClick={() => {
                                        addInCart(props.item)
                                    }}
                                    disabled={props.checkInCart(props.item.id)}
                                    className={' flower__inCart'}>
                                    {
                                        !props.checkInCart(props.item.id) ? 'В корзину' : ' В корзине'
                                    }
                                </Button>
                                {
                                    !props.checkInCart(props.item.id) &&
                                    <button className={'flower__click-buy fonts__proximaNovaBold'}>Купить в
                                        один клик</button>
                                }

                            </div>
                            <Composition composition={props.item.composition}/>
                            <div className="flower__desc">
                                Букет станет отличным подарком для девушки на любой праздник. Известная композиция Ларии
                                Лучевой подарит приятные эмоции и тонкий цветочный аромат
                            </div>
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

export default withCartConnect(Flower)