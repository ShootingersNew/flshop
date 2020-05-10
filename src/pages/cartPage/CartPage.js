import React from "react";
import withCartConnect from "../../hoc/withCartConnect";
import Cart from "../../common.blocks/cart/Cart";
import Container from "../../common.blocks/container/Container";
import Breadcrumbs from "../../common.blocks/breadcrumbs/Breadcrumbs";
import CartPrice from "../../common.blocks/cartPrice/CartPrice";
import Checkout from "../../common.blocks/checkout/Checkout";
import Main from "../../common.blocks/main/Main";
import AsideBanners from "../../common.blocks/asideBanners/AsideBanners";
import {connect} from "react-redux";

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.setCheckoutAttributes.bind(this);
        this.state = {
            chosenDelivery: {
                type: 'Доставка курьером',
                price: 100
            },
            address: 'Воронеж, Ельская, 7',
            finalPrice: '',
            discount: {
                minPrice: 0,
                salePercent: 0
            },
            attributes: ''
        }
    }

    componentDidMount() {
        this.setPrice()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setPrice()
        }
    }

    setPrice = () => {

        this.setState(() => {
                return {
                    finalPrice: this.props.price - this.state.discount.salePercent / 100 * this.props.price + this.state.chosenDelivery.price,
                    discount: this.props.cart.discount.reduce((item, cur) => (
                        cur.minPrice < this.props.price && item.minPrice < cur.minPrice ?
                            cur : item
                    ))
                }
            }
        )
    };
    setCheckoutAttributes = (attributes) => {
        this.setState(() => {
            return {
                attributes: attributes
            }
        })
    };

    render() {
        const {items, length, price} = this.props;
        const {discount, chosenDelivery, address, finalPrice} = this.state;
        return (
            <React.Fragment>
                <Container>
                    <Breadcrumbs/>
                    <Main className={'main_inlineBlock main_checkout'}>
                        <Cart items={items} length={length}/>
                        <CartPrice price={price} finalPrice={finalPrice} discount={discount}
                                   chosenDelivery={chosenDelivery} address={address}/>
                        <Checkout setAttrs={this.setCheckoutAttributes}/>
                    </Main>

                    <AsideBanners id={'checkoutAside'} itemsIn={length}/>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};
export default connect(mapStateToProps)(withCartConnect(CartPage))