//libs
import React from "react"
import PropTypes from 'prop-types'
//utils
import {regExpPrice} from "../../config/utils";
//styles
import './cartPrice.css'
import '../fonts/__proximaNovaBold/fonts__proximaNovaBold.css'

CartPrice.propTypes = {
    price: PropTypes.number.isRequired,
    discount: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired,
    chosenDelivery: PropTypes.object.isRequired,
    finalPrice: PropTypes.number.isRequired
};
export default function CartPrice(props) {
    return (
        <table className={'cartPrice__table'}>
            <tr className="cartPrice__tr">
                <th className="cartPrice__header">Итого</th>
                <td className="cartPrice__price fonts__proximaNovaBold">{regExpPrice(props.price)}р</td>
            </tr>
            <tr className="cartPrice__tr">
                <th className="cartPrice__header">Скидка {props.discount.salePercent}%
                    от {regExpPrice(props.discount.minPrice)}р
                </th>
                <td className="cartPrice__price fonts__proximaNovaBold">-{regExpPrice(props.price * (props.discount.salePercent / 100))}р</td>
            </tr>
            <tr className="cartPrice__tr">
                <th className="cartPrice__header"><span>{props.chosenDelivery.type}</span> <span
                    className={'cartPrice__separator'}>/</span> {props.address}</th>
                <td className="cartPrice__price fonts__proximaNovaBold">+{regExpPrice(props.chosenDelivery.price)}р</td>
            </tr>
            <tr className="cartPrice__tr cartPrice__sum">
                <th className="cartPrice__header">
                    Общая сумма
                </th>
                <td className="cartPrice__price fonts__proximaNovaBold">
                    {regExpPrice(props.finalPrice)}р
                </td>
            </tr>
        </table>
    )
}