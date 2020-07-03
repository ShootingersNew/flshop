//libs
import React from "react"
import Popup from "reactjs-popup"
import PropTypes from 'prop-types'
//styles
import './modal.css'
//utils
import {getScrollbarWidth} from "../../config/utils";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.openHandler.bind(this);
        this.closeHandler.bind(this)
    }

    static propTypes = {
        trigger: PropTypes.any,
        submitHandler: PropTypes.func,
        content: PropTypes.element,
    };
    openHandler = () => {
        document.body.style.marginRight = getScrollbarWidth() + 'px';
    };
    closeHandler = () => {
        document.body.style.marginRight = 'unset';
    };

    render() {

        return (
            <Popup
                lockScroll={true}
                modal={true}
                onOpen={this.openHandler}
                onClose={this.closeHandler}
                {...this.props}
            >
            <span>
                <div className="popup__header">{this.props.header}</div>
                {this.props.content}
            </span>
            </Popup>
        )
    }

}