//libs
import React from "react"
import Popup from "reactjs-popup"
import PropTypes from 'prop-types'
//styles
import './modal.css'

Modal.propTypes = {
    trigger: PropTypes.element,
    submitHandler: PropTypes.func,
    content: PropTypes.element,
    open: PropTypes.bool
};
export default function Modal(props) {
    return (
        <Popup
            lockScroll={true}
            modal={true}
            {...props}
        >
            <span>
                <div className="popup__header">{props.header}</div>
                {props.content}
            </span>
        </Popup>
    )

}