import React from "react";
import Popup from "reactjs-popup";
import button from '../button/button.module.css'
import './modal.css'

export default function Modal(props) {
    return (
        <Popup
            lockScroll={true}
            modal={true}
            onOpen={() => {
                console.log('effects')
            }}
            trigger={() => (
                <button className={button.button + ' ' + props.btnClassName}
                        disabled={props.btnDisabled}>Оформить</button>
            )}
            closeOnDocumentClick
        >
            <span>
                <div className="popup__header">{props.header}</div>
                {props.content()}
            </span>
        </Popup>
    )

}