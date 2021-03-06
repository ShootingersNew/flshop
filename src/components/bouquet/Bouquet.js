//libs
import React, {useState} from "react"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import cn from 'classnames'
//comps
import withCartConnect from "../../hoc/withCartConnect"
import Checkbox from "../checkbox/Checkbox"
//utils
import {regExpPrice, useIsMobile} from "../../config/utils"
//styles
import './../svgfont/svgfont.css'
import './bouquet.css'

Bouquet.propTypes = {
    item: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    classname: PropTypes.string,
    mod: PropTypes.string,
    itemAmount: PropTypes.number,
    cartIsChecked: PropTypes.func,
    cartCheckedItems: PropTypes.array,
    cartCheckCheckbox: PropTypes.func

};

function Bouquet(props) {
    const isMobile = useIsMobile();
    const buttonRef = React.createRef();
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    function increaseQuantity() {
        const quantity = props.item.amount + 1;
        props.changeQuantity(props.item.id, quantity)
    }

    function decreaseQuantity() {
        if (props.item.amount !== 1) {
            const quantity = props.item.amount - 1;
            props.changeQuantity(props.item.id, quantity)
        }
    }

    const showMobileNotification = () => {
        setIsNotificationOpen(true);
        setTimeout(() => {
            setIsNotificationOpen(false)
        }, 4000)
    };

    const addTo = () => {
        showMobileNotification();
        props.addToCart(props.item)
    };

    //prevent clicking on the link if e.target ==== add-to-cart button
    const bouquetClasses = cn({
        bouquet: true,
        [`bouquet_${props.mod}`]: props.mod
    });
    const decreaseButtonClasses = cn({
        'bouquet__counterButton  bouquet__counterButton_left icon-svg__minus': true,
        'bouquet__counterButton_active': props.item.amount !== 1
    });
    return (
        <>
            <article className={bouquetClasses}>
                {/*if props.mod === type_cart then the content is rendered without a link*/}

                <main className="bouquet__main">
                    <div className="bouquet__image-wrapper">
                        <img className={'bouquet__image'} src={props.item.src} alt={props.item.name}/>
                    </div>
                    <div className="bouquet__info">
                        <div className="bouquet__price-info">
                            <span
                                className="bouquet__price fonts__proximaNovaBold">{regExpPrice(props.item.price)}р</span>
                            {
                                props.item.sale &&

                                <div className="bouquet__sale">{regExpPrice(props.item.salePrice)}р
                                    <div className={'bouquet__saleMark'}>
                                        <div className="bouquet__salePercent">{props.item.percents}</div>
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
                </main>
                {
                    //cart footer
                    props.mod && props.mod === 'type_cart' ?
                        <React.Fragment>
                            <div className="bouquet__controls">
                                <div className="bouquet__counter">
                                    {
                                        (!isMobile || props.item.amount > 1) && <span
                                            onClick={() => {
                                                decreaseQuantity()
                                            }}
                                            className={decreaseButtonClasses}
                                        />
                                    }
                                    <span className={"bouquet__counterNumber"}>{props.item.amount}</span>
                                    <span onClick={() => {
                                        increaseQuantity()
                                    }}
                                          className={"bouquet__counterButton bouquet__counterButton_right icon-svg__plus"}/>
                                </div>
                                {
                                    isMobile &&
                                    <Checkbox
                                        controlled={true}
                                        checked={props.cartIsChecked(props.cartCheckedItems, props.item.id)}
                                        name={'bouquet_chosen'}
                                        onChange={() => props.cartCheckCheckbox(props.item.id)}
                                    />
                                }
                                <div className="bouquet__sumPrice fonts__proximaNovaBold">
                                    {regExpPrice(props.item.sumPrice)}р
                                </div>
                            </div>
                            <span
                                onClick={() => {
                                    props.removeItems([props.item.id])
                                }}
                                className="bouquet__delete icon-svg__cross"
                            />
                        </React.Fragment>
                        :
                        //default footer
                        <React.Fragment>
                            <footer className={'bouquet__footer'}>
                                <Link
                                    className={'link bouquet__footerLink'}
                                    to={'/goods/' + props.item.type + '/' + props.item.id}
                                >
                                    Подробнее
                                </Link>
                                <ButtonWithRefs ref={buttonRef} addTo={addTo} {...props}/>
                            </footer>
                            {
                                !isMobile && <Link
                                    className={'bouquet__link'}
                                    to={'/goods/' + props.item.type + '/' + props.item.id}
                                />
                            }
                        </React.Fragment>
                }
            </article>
            {
                isNotificationOpen && isMobile &&
                <MobileNotification/>
            }
            {
                isMobile && <Link
                    className={'bouquet__link'}
                    to={'/goods/' + props.item.type + '/' + props.item.id}
                />
            }
        </>

    )
}

const ButtonWithRefs = React.forwardRef((props, ref) => (
    <button
        ref={ref}
        className="bouquet__cartButton"
        onClick={props.addTo}
        disabled={props.checkInCart(props.item.id)}>
        <span className="icon-svg__plus bouquet__plus"/>
        <span className="icon-svg__cartico bouquet__cart"/>
    </button>
));
const MobileNotification = () => {
    return (
        <div className="bouquet__mobileNotification">
            Товар добавлен <Link className={'link'} to={'/cart'}>в корзину</Link>
        </div>
    )
};
export default withCartConnect(Bouquet)
