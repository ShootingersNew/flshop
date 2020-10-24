//libs
import React from "react"
//comps
import Bouquet from "../bouquet/Bouquet"
//styles
import './cart.css'
import {Redirect} from "react-router";

export default function Cart({items, length, cartCheckedItems, cartIsChecked, cartCheckCheckbox}) {
    return (
        <div className="cart">
            <div className="cart__container">
                <header className="cart__header">
                    Корзина<span className="cart__counter  fonts__proximaNovaSemibold">{length}</span>
                </header>
                <div className="cart__items">
                    {
                        items.length !== 0 ?
                            items.map((item, idx) => {
                                    return (
                                        <div key={idx} className="cart__itemWrapper">
                                            <Bouquet
                                                cartCheckCheckbox={cartCheckCheckbox}
                                                cartCheckedItems={cartCheckedItems}
                                                cartIsChecked={cartIsChecked}
                                                key={item.id}
                                                classname={'cart__item'}
                                                item={item}
                                                mod={'type_cart'}
                                            />
                                        </div>
                                    )
                                }
                            )
                            :
                            <Redirect to={'/catalog'}/>
                    }
                </div>
            </div>
        </div>
    )
}
