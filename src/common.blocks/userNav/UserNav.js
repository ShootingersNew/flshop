import React from "react";
import withCartConnect from "../../hoc/withCartConnect";
import {regExpPrice} from "../../config/utils";
import './userNav.css'
import './../svgfont/svgfont.css'

function UserNav(props) {
    return (
        <div className={`${props.class} userNav`}>
            <span className="userNav__userIco icon-svg__userico"/>
            <div className="userNav__cart">
                <span className="userNav__cartIco icon-svg__cartico"/>

                <span className="userNav__itemCounter">{props.length}</span>
                <span className="userNav__separator"> / </span>
                <span className="userNav__price">{regExpPrice(props.price)}р</span>
            </div>
        </div>
    )
}

export default withCartConnect(UserNav)