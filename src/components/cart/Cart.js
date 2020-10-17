//libs
import React from "react"
//comps
import Bouquet from "../bouquet/Bouquet"
//styles
import './cart.css'
import {Redirect} from "react-router";

export default function Cart(props) {
    return (
        <div className="cart">
            <div className="cart__container">
                <header className="cart__header">
                    Корзина<span className="cart__counter  fonts__proximaNovaSemibold">{props.length}</span>
                </header>
                <div className="cart__items">
                    {
                        props.items.length !== 0 ?
                            props.items.map((item, idx) => (
                                <div className="cart__itemWrapper">
                                    <Bouquet
                                        key={idx}
                                        classname={'cart__item'}
                                        item={item}
                                        mod={'type_cart'}
                                    />
                                </div>
                            ))
                            :
                            <Redirect to={'/catalog'}/>
                    }
                </div>
            </div>
        </div>
    )
}
