//libs
import React from "react";
import {compose} from "redux";
import {connect} from 'react-redux'
//redux
import {addItem, changeQuantity, removeItems} from "../redux/cartReducer/actions"

function withCartConnect(Component) {
    class WithCartConnect extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                checkedIDs: []
            }
        }


        // method that checks if such a product has already been added to the cart and returns
        // boolean
        checkInCart = (id) => {
            return this.props.cart.itemsIn.some(item => {
                return item.id === id
            });
        };

        checkCheckbox = (id) => {
            let newArr = this.state.checkedIDs;
            if (!id) {
                newArr = this.props.cart.itemsIn.map((item) => (
                    item.id
                ));
            } else {
                if (this.state.checkedIDs.includes(id)) {
                    newArr = this.state.checkedIDs.filter((item) => {
                        return item !== id
                    })
                } else {
                    newArr = [...newArr, id]
                }
            }
            this.setState({checkedIDs: newArr})
        };
        isChecked = (checked, id) => {
            return checked.includes(id)
        };

        render() {
            const itemsArr = this.props.cart.itemsIn;
            const itemsLength = itemsArr.length;
            const itemsSumPrice = itemsArr.reduce((sum, current) => (
                sum + current.sumPrice
            ), 0);
            const {checkedIDs} = this.state;
            return <Component
                removeItems={this.removeItems}
                isChecked={this.isChecked}
                checkedItems={checkedIDs}
                checkCheckbox={this.checkCheckbox}
                changeQuantity={this.props.changeQuantity}
                checkInCart={this.checkInCart}
                addToCart={this.props.addItemToCart}
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
        addItemToCart: (item) => dispatch(addItem(item)),
        changeQuantity: (id, entity) => dispatch(changeQuantity(id, entity)),
        removeItems: (id) => dispatch(removeItems(id))
    }
};
export default compose(connect(mapStateToProps, mapDispatchToProps), withCartConnect)
