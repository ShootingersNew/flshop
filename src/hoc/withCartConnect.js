//libs
import React from "react";
import {compose} from "redux";
import {connect} from 'react-redux'
//redux
import {addItem, changeQuantity, removeItem} from "../redux/cartReducer/actions"

function withCartConnect(Component) {
    class WithCartConnect extends React.Component {

        //метод, который проверяет, добавлен ли уже такой товар в корзину и возвращает
        // булевое значение
        checkInCart = (id) => {
            return this.props.cart.itemsIn.some(item => {
                return item.id === id
            });
        };

        render() {
            const itemsArr = this.props.cart.itemsIn;
            const itemsLength = itemsArr.length;
            const itemsSumPrice = itemsArr.reduce((sum, current) => (
                sum + current.sumPrice
            ), 0);
            return <Component
                removeItem={this.removeItem}
                changeQuantity={this.props.changeQuantity}
                checkInCart={this.checkInCart}
                addInCart={this.props.addItemInCart}
                items={this.props.cart.itemsIn}
                price={itemsSumPrice}
                length={itemsLength}
                {...this.props}
            />
        }

    }

    WithCartConnect.displayName = `WithCartConnect(${getDisplayName(Component)})`;
    return WithCartConnect
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addItemInCart: (item) => dispatch(addItem(item)),
        changeQuantity: (id, entity) => dispatch(changeQuantity(id, entity)),
        removeItem: (id) => dispatch(removeItem(id))
    }
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withCartConnect)