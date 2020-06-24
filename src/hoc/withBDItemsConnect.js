import React from "react";

//hoc "соединяет" component Showcase "и т.п компоненты с соответствующими товарами по idx, указанному
// в пропсах
function withBDItemsConnect(WrappedComponent) {
    class WithBDItemsConnect extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                goods: []
            };

        }

        componentDidMount() {
            //  если был бы API то, тут можно было бы обратиться к нему
            //    и после передать полученные данные через handleChange в стейт
            // но это лишь демонстрация работы, так что берем из json
            const idx = this.props.idx ? this.props.idx : 'allItems';
            const arr = require('../config/json/' + idx);
            this.setCurrentItemsInState(arr);
        }

        setCurrentItemsInState(goods) {
            this.setState({
                goods: goods
            });
        }

        render() {
            return <WrappedComponent goods={this.state.goods} {...this.props} />;
        }
    }

    WithBDItemsConnect.displayName = `WithBDItemsConnect(${getDisplayName(WrappedComponent)})`;
    return WithBDItemsConnect
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

//коннектим hoc со стором методом compose
export default withBDItemsConnect