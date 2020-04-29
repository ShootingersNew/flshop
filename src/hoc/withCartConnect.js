import React from "react";
import {compose} from "redux";
import {connect} from 'react-redux'
import {addItem} from "../redux/cartReducer/actions";

function withCartConnect(Component) {

    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            const itemsArr = this.props.cart.itemsIn;
            const itemsLength = itemsArr.length;
            const itemsSumPrice = itemsArr.reduce((sum, current) => (
                sum + current.price
            ), 0);
            return <Component addInCart={this.props.addItem} price={itemsSumPrice}
                              length={itemsLength} {...this.props} />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};
const mapDispatchToProps = {
    addItem
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withCartConnect)