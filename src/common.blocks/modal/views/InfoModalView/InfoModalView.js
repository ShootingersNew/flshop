import React from "react"
import PropTypes from 'prop-types'

InfoModalView.propTypes = {
    info: PropTypes.shape({
        items: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        comment: PropTypes.string,
        finalPrice: PropTypes.number.isRequired,
        discount: PropTypes.shape({
            salePercent: PropTypes.number.isRequired,
            minPrice: PropTypes.number.isRequired
        })
    }),
};
export default function InfoModalView(props) {
    const {info} = props;
    return (
        <React.Fragment>
            Приветики. <br/> Вы
            'купили': {info.items.map((item) => (item.name + '. Артикул: ' + item.vendorCode + '. '))}
            Вас зовут {info.name} и ваш телефон {info.phone}. {info.comment !== '' &&
        <span>Комментарий: {info.comment}.</span>}
            Суммарно ваши покупки стоят {info.finalPrice}р, с учетом скидки в {info.discount.salePercent}%, которая
            от {info.discount.minPrice} рублей.
            Но это лишь имитация работы магазина =)
        </React.Fragment>
    )
}