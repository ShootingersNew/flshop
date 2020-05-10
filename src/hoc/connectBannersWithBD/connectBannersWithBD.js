import React from "react";
import {connect} from 'react-redux';
import {compose} from "redux";

//hoc connect banners (1 or more) with bd

function connectBannersWithBD(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                banners: {}
            }
        }

        componentDidMount() {
            //   there is connecting to bd(fetch api)

            //i know that send props to state is bad practice, but
            //its an imitation of the server

            this.setState({
                banners: this.props.banners
            })
        }

        render() {
            return (
                <React.Fragment>
                    <Component banners={this.state.banners} {...this.props} />
                </React.Fragment>
            )
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        banners: state.banners[props.id]
    }
};
export default compose(connect(mapStateToProps), connectBannersWithBD)