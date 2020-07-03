import React from "react";
import './listingSidebar.css'

export default function ListingSidebar(props) {
    return (
        <aside className="listingSidebar">
            {props.children}
        </aside>
    )
}