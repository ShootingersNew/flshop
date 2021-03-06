import React from "react"
import Container from "../container/Container";
//styles
import './orderControl.css'
import img from './img/order.png'

export default function OrderControl() {
    return (
        <div className={'orderControl'}>
            <Container className={'orderControl__container'}>
                <Container>
                    <div className="orderControl__header">Контроль заказа перед доставкой</div>
                </Container>
                <div className="orderControl__content">
                    <img src={img} alt="" className="orderControl__image"/>
                    {/*container for wrap items on mobile phones*/}
                    <Container className="container_mobile">
                        <ul className="orderControl__list">
                            <li className="orderControl__li">В день доставки оператор свяжется для уточнения заказа
                                и адреса доставки, будьте внимательны с номером заказа
                            </li>
                            <li className="orderControl__li">Покупатель утверждает заказ, вносит правки, либо
                                отказывается.
                                При отказе производится возрат средств
                            </li>
                            <li className="orderControl__li">Заказ с внесенными правками передается в службу доставки,
                                также
                                есть возможность отслеживания заказа
                            </li>
                            <li className="orderControl__li">После завершения заказа, можете написать пожелания по
                                улучшению
                                работы и отзыв. Получайте скидки за отзывы
                            </li>
                        </ul>
                    </Container>
                </div>
            </Container>
        </div>
    )
}
