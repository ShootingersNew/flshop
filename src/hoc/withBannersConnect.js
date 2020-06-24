import React from "react";

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
            //   there is connecting to bd(fetch api)

            //i know that send props to state is bad practice, but
            //its an imitation of the server
            const bannerArr = require('../config/json/banners');
            this.setState({
                banners: bannerArr
            })
        }

        render() {
            return (
                <React.Fragment>
                    <Component banners={this.state.banners[this.props.id]} {...this.props} />
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