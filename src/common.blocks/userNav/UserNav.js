import React from "react";
import './userNav.css'
import './../svgfont/svgfont.css'

export default function UserNav(props) {
    return (
        <div className={`${props.class} userNav`}>
                        <span className="userNav__userIco icon-svg__userico">

                        </span>
            <div className="userNav__cart">
                    <span className="userNav__cartIco icon-svg__cartico">

                    </span>
                <span className="userNav__itemCounter">{props.itemsIn}</span>
                <span className="userNav__separator"> / </span>
                <span className="userNav__price">{props.itemsPrice}</span>
            </div>
        </div>
    )
}