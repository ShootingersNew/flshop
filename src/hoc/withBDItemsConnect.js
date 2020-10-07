import React from "react";
import arr from "../config/json/allItems";

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
            // goodsApi.get(this.props.idx).then((res) => {
            //     this.setState({goods: res})
            // });
            this.props.idx ? this.setState({goods: arr[this.props.idx]}) : this.setState({goods: arr.allItems})
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
