import React from "react";
import {compose} from "redux";
import {connect} from 'react-redux'
//hoc "соединяет" витрины и т.п компоненты с соответствующими товарами по idx, указанному
// в пропсах
function withBDConnect(WrappedComponent) {
    return class extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                goods: []
            };
        }

        componentDidMount() {
            //  если был бы REST API то, тут можно было бы обратиться к нему
            //    и после передать полученные данные через handleChange в стейт
            this.handleChange(this.props.goods);
        }

        handleChange(goods) {
            this.setState({
                goods: goods
            });
        }

        render() {
            return <WrappedComponent goods={this.state.goods} {...this.props} />;
        }
    };
}

const mapStateToProps = (state, props) => {
    return {
        goods: state.goods[props.idx]
    }
};
//коннектим hoc со стором методом compose
export default compose(connect(mapStateToProps), withBDConnect)