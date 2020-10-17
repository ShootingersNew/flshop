//libs
import React from "react"
import PropTypes from 'prop-types'
import {connect} from "react-redux"
//comps
import withCartConnect from "../../hoc/withCartConnect"
import Cart from "../../components/cart/Cart"
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs"
import CartPrice from "../../components/cartPrice/CartPrice"
import Checkout from "../../components/checkout/Checkout"
import Main from "../../components/main/Main"
import AsideBanners from "../../components/asideBanners/AsideBanners"

class CartPage extends React.Component {
    constructor(props) {
        super(props);
        this.submitCheckout.bind(this);
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
            attributes: {
                name: '',
                phone: '',
                comment: '',
            },
        }
    }

    static propTypes = {
        items: PropTypes.array.isRequired,
        length: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired

    };

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
                //set discount
                discount: this.props.cart.discount.reduce((item, cur) => (
                    cur.minPrice < this.props.price && item.minPrice < cur.minPrice ?
                        cur : item
                )),
            }
        }, () => {
            //set final price based on discount
            this.setState(() => {
                return {
                    finalPrice: this.props.price - this.state.discount.salePercent / 100 * this.props.price + this.state.chosenDelivery.price,
                }
            })
        })
    };

    //set state.attributes and send information to bd
    submitCheckout = (attributes) => {
        this.setState(() => {
            return {
                attributes: attributes
            }
        });
    };


    render() {
        const {items, length, price} = this.props;
        const {discount, chosenDelivery, address, finalPrice, attributes} = this.state;
        return (
            <React.Fragment>
                <Main
                    className={'main_inlineBlock main_checkout'}
                    container={true}
                    content={
                        <React.Fragment>
                            <Breadcrumbs
                                items={
                                    [
                                        {title: 'Главная', path: '/'},
                                        {title: 'Каталог', path: '/catalog'},
                                        {title: 'Корзина'}
                                    ]
                                }
                            />
                            <Cart items={items} length={length}/>

                            <CartPrice
                                price={price}
                                finalPrice={finalPrice}
                                discount={discount}
                                chosenDelivery={chosenDelivery}
                                address={address}
                            />

                            <Checkout
                                submitCheckout={this.submitCheckout}
                                popupContent={{...attributes, length, items, address, finalPrice, discount}}
                                setAttrs={this.submitCheckout}
                            />
                        </React.Fragment>
                    }
                    aside={
                        () => <AsideBanners
                            id={'cart'}
                            count={length}
                            className={'asideBanners_float'}
                        />
                    }
                >
                </Main>
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
