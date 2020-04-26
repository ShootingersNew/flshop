import React from "react";
import {connect} from "react-redux";
import Breadcrumbs from "../../common.blocks/breadcrumbs/Breadcrumbs";
import Flower from "../../common.blocks/flower/Flower";
import './../../common.blocks/container/container.css'

class Goods extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Breadcrumbs/>
                <Flower/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods
    }
};

export default connect(mapStateToProps)(Goods)