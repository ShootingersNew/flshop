//libs
import React from "react"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'
import {LazyImage} from "react-lazy-images";
//comps
import withCartConnect from "../../hoc/withCartConnect"
import Preloader from "../preloader/Preloader";
//utils
import {regExpPrice} from "../../config/utils"
//styles
import './../svgfont/svgfont.css'
import './bouquet.css'

Bouquet.propTypes = {
    item: PropTypes.object.isRequired,
    addInCart: PropTypes.func.isRequired,
    classname: PropTypes.string,
    mod: PropTypes.string,
};

function Bouquet(props) {
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

    let classes = 'bouquet';
    if (props.mod) {
        classes = classes + ' ' + classes + '_' + props.mod
    }
    return (
        <article className={classes + ' ' + props.classname}>
            <main className="bouquet__main">
                {props.mod && props.mod === 'type_cart' ?
                    <Link to={'/goods/' + props.item.type + '/' + props.item.id}>
                        <img className={'bouquet__image'} src={props.item.src} alt={props.item.name}/>
                    </Link>
                    :
                    // <img className={'bouquet__image'} src={props.item.src} alt={props.item.name}/>
                    <LazyImage
                        loadEagerly
                        src={props.item.src}
                        className={'bouquet__image'}
                        placeholder={({imageProps, ref}) => (
                            <Preloader ref={ref} className={imageProps.className}/>
                        )}
                        actual={({imageProps}) => <img {...imageProps} alt={props.item.name}/>}
                    />
                }
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
            </main>
            {/*controls for cart bouquets*/}
            {props.mod && props.mod === 'type_cart' ?
                <React.Fragment>
                    <div className="bouquet__controls">
                        <div className="bouquet__counter">
                        <span onClick={() => {
                            decreaseQuantity()
                        }} className={"bouquet__counterButton bouquet__counterButton_left icon-svg__minus"}/>
                            <span className={"bouquet__counterNumber"}>{props.item.amount}</span>
                            <span onClick={() => {
                                increaseQuantity()
                            }} className={"bouquet__counterButton bouquet__counterButton_right icon-svg__plus"}/>
                        </div>
                        <div className="bouquet__sumPrice fonts__proximaNovaBold">
                            {regExpPrice(props.item.sumPrice)}р
                        </div>
                    </div>
                    <span onClick={() => {
                        props.removeItem(props.item.id)
                    }} className="bouquet__delete icon-svg__cross"/>
                </React.Fragment>
                :
                //default footer
                <footer className={'bouquet__footer'}>
                    <Link className={'link'} to={'/goods/' + props.item.type + '/' + props.item.id}>Подробнее</Link>

                    <button onClick={() => {
                        props.addInCart(props.item)
                    }} className="bouquet__cartButton" disabled={props.checkInCart(props.item.id)}>
                        <span className="icon-svg__plus bouquet__plus"/>
                        <span className="icon-svg__cartico bouquet__cart"/>
                    </button>
                </footer>
            }
        </article>
    )
}

export default withCartConnect(Bouquet)