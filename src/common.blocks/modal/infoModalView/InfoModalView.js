import React from "react";

export default function InfoModalView(props) {
    const {info} = props;
    return (
        <React.Fragment>
            Приветики. <br/> Вы
            'купили': {info.items.map((item) => (item.name + '. Артикул: ' + item.vendorCode + '. '))}
            Вас зовут {info.name.val} и ваш телефон {info.phone.val}. {info.comment.val !== '' &&
        <span>Комментарий: {info.comment.val}.</span>}
            Суммарно ваши покупки стоят {info.finalPrice}р, с учетом скидки в {info.discount.salePercent}%, которая
            от {info.discount.minPrice} рублей.
            Но это лишь имитация работы магазина =)
        </React.Fragment>
    )
}