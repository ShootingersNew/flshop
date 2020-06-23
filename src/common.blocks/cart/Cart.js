//libs
import React from "react"
//comps
import Bouquet from "../bouquet/Bouquet"
//styles
import './cart.css'
import '../fonts/__proximaNovaSemibold/fonts__proximaNovaSemibold.css'

export default function Cart(props) {
    return (
        <div className="cart">
            <div className="cart__container">
                <header className="cart__header">
                    Корзина<span className="cart__counter  fonts__proximaNovaSemibold">{props.length}</span>
                </header>
                <div className="cart__items">
                    {
                        props.items.map((item) => (
                            <Bouquet
                                classname={'cart__item'}
                                item={item}
                                mod={'type_cart'}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}