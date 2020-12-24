//libs
import React from "react"
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
//comps
import Composition from "../composition/Composition"
import Button from "../button/Button"
import Gallery from "../gallery/Gallery"
import withCartConnect from "../../hoc/withCartConnect"
import Breadcrumbs from "../breadcrumbs/Breadcrumbs"
import Container from "../container/Container"
//styles || utils
import './flower.css'
import star from './img/Star.svg'
import {regExpPrice, useIsMobile} from "../../config/utils"


Flower.propTypes = {
    item: PropTypes.object.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

function Flower(props) {
    const isMobile = useIsMobile();
    const addInCart = (item) => {
        props.addItemToCart(item)
    };
    const {item, type, path} = props;
    return (
        <React.Fragment>
            {
                item ?
                    <div className="flower__wrapper">
                        <article className={'flower'}>
                            <Gallery item={item}/>

                            {
                                isMobile ?

                                    // MOBILE VER
                                    <>
                                        <div className="flower__sticky">
                                        <Container>
                                            <div className="flower__price">
                                            <span
                                                className="flower__actualPrice fonts__proximaNovaBold">{regExpPrice(props.item.price)}р</span>
                                                {
                                                    item.sale ?

                                                        <div className="flower__sale">
                                                        <span
                                                            className="flower__salePrice">{item.salePrice}р</span>
                                                            <span
                                                                className="flower__salePercents"><span>{item.percents}</span></span>
                                                        </div>
                                                        : null
                                                }
                                            </div>
                                            <h1 className="flower__header">{item.name}</h1>
                                        </Container>
                                    </div>
                                    <div className="flower__stickyBack">
                                        <Container>
                                            <div className="flower__vendorCode">
                                                Артикул<span>{item.vendorCode}</span>
                                            </div>
                                            <div className="flower__mark">
                                                <img className={'flower__markIcon'} src={star} alt="star"/> {item.mark}
                                            </div>
                                        </Container>
                                        <div className="flower__buttons">
                                            <Link to={`${path}/desc`}
                                                  className="flower__button"><Container>Описание</Container></Link>
                                            <Link to={`${path}/composition`}
                                                  className="flower__button"><Container>Композиция</Container></Link>
                                            <Link to={`${path}/reviews`}
                                                  className="flower__button"><Container>Отзывы</Container></Link>
                                        </div>
                                    </div>

                                </>

                                //else
                                :
                                <div className="flower__control">
                                    <div className="flower__info">
                                        <Breadcrumbs
                                            items={
                                                [
                                                    {title: 'Главная', path: '/'},
                                                    {title: 'Каталог', path: '/catalog'},
                                                    {title: item.category},
                                                    {title: [item.name]},
                                                ]
                                            }
                                        />
                                        <h1 className="flower__header">{props.item.name}</h1>
                                        <div className="flower__vendorCode">
                                            Артикул<span>{item.vendorCode}</span>
                                        </div>
                                        <div className="flower__mark">
                                            <img className={'flower__markIcon'} src={star} alt="star"/> {item.mark}
                                        </div>
                                        <div className="flower__reviewsLink link">8 отзывов</div>
                                    </div>
                                    <div className="flower__price">
                                        <span
                                            className="flower__actualPrice fonts__proximaNovaBold">{regExpPrice(item.price)}р</span>
                                        {
                                            item.sale ?

                                                <div className="flower__sale">
                                                    <span className="flower__salePrice">{item.salePrice}р</span>
                                                    <span
                                                        className="flower__salePercents"><span>{item.percents}</span></span>
                                                </div> : null
                                        }
                                    </div>

                                    <div className="flower__buttons">
                                        <Button
                                            onClick={() => {
                                                addInCart(item)
                                            }}
                                            disabled={props.checkInCart(item.id)}
                                            className={' flower__inCart'}>
                                            {
                                                !props.checkInCart(item.id) ? 'В корзину' : ' В корзине'
                                            }
                                        </Button>
                                        {
                                            !props.checkInCart(item.id) &&
                                            <button className={'flower__click-buy fonts__proximaNovaBold'}>Купить в
                                                один клик</button>
                                        }

                                    </div>
                                    {
                                        type !== 'additionalItems'
                                        &&
                                        <React.Fragment>
                                            <Composition composition={item.composition}/>
                                            <div className="flower__desc">
                                                Букет станет отличным подарком для девушки на любой праздник. Известная
                                                композиция Ларии
                                                Лучевой подарит приятные эмоции и тонкий цветочный аромат
                                            </div>
                                        </React.Fragment>
                                    }
                                </div>
                        }
                    </article>

                </div>

                :
                null
            }

        </React.Fragment>
    )
}

export default withCartConnect(Flower)
