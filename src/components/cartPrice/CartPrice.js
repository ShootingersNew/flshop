//libs
import React from "react"
import PropTypes from 'prop-types'
import cn from 'classnames'
//utils
import {regExpPrice} from "../../config/utils";
//styles
import './cartPrice.css'

CartPrice.propTypes = {
    price: PropTypes.number.isRequired,
    discount: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired,
    chosenDelivery: PropTypes.object.isRequired,
    finalPrice: PropTypes.any.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf(['inMobileCart'])
};
export default function CartPrice(props) {
    const cartPriceClassNames = cn({
        'cartPrice__table': true,
        [`${props.className}`]: props.className
    });
    return (
        <table className={cartPriceClassNames}>
            <tbody>
            <tr className="cartPrice__tr">
                <th className="cartPrice__header">Итого</th>
                <td className="cartPrice__price ">{regExpPrice(props.price)}р</td>
            </tr>
            <tr className="cartPrice__tr">
                <th className="cartPrice__header">Скидка
                    <span className="cartPrice__percents">
                    {props.discount.salePercent}%
                    от {regExpPrice(props.discount.minPrice)}р
                    </span>
                </th>
                <td className="cartPrice__price cartPrice__salePrice">-{regExpPrice(props.price * (props.discount.salePercent / 100))}р
                    <span className="cartPrice__percents cartPrice__percents_mobile">
                           {props.discount.salePercent}%
                    </span>
                </td>
            </tr>
            <tr className="cartPrice__tr cartPrice__tr_delivery">

                <th className="cartPrice__header">
                    <span>{props.type === 'inMobileCart' ? props.chosenDelivery.type.split(' ')[0] : props.chosenDelivery.type}</span>
                    {props.type === 'inMobileCart' ? false : <> <span
                        className={'cartPrice__separator'}>/</span> {props.address}</>}
                </th>
                <td className="cartPrice__price ">+{regExpPrice(props.chosenDelivery.price)}р</td>
            </tr>

            <tr className="cartPrice__tr cartPrice__sum">
                <th className="cartPrice__header">
                    Общая сумма
                </th>
                <td className="cartPrice__price">
                    {regExpPrice(props.finalPrice)}р
                </td>
            </tr>
            </tbody>
        </table>
    )
}
