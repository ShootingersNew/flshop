import React from "react";
import {bannersApi} from "../api/api";

//hoc connect banners (1 or more) with bd

function withBannersConnect(Component) {
    class WithBannersConnect extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                banners: []
            }
        }


        componentDidMount() {
            bannersApi.get(this.props.id)
                .then((res) => {
                    this.setState({banners: res[this.props.id]})
                });
        }

        render() {
            return (
                <React.Fragment>
                    <Component banners={this.state.banners} {...this.props} />
                </React.Fragment>
            )
        }
    }

    WithBannersConnect.displayName = `WithBannersConnect(${getDisplayName(Component)})`;
    return WithBannersConnect
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withBannersConnect